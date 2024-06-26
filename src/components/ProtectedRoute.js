import React, { useEffect } from 'react'
import {Navigate} from 'react-router-dom';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
import { setUser } from '../redux/features/userSlice';


export default function ProtectedRoute({children}) {
 
    const dispatch = useDispatch();
    // to get the user we will use useSelector
    const {user} = useSelector(state => state.user)

    const getUser = async() => {
        try{
            dispatch(showLoading());// spinner will get shown when the request will be going
            const response = await axios.post('api/v1/user/getUserData', 
            {
                token : localStorage.getItem('token')
            },
            {
                headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
               }
            }
            )  
            dispatch(hideLoading());    
            if (response.data.success) {
                dispatch(setUser(response.data.data));
            }
            else{
                <Navigate to="/login"/>;
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        if(!user){
            getUser()
        }
    })
    if(localStorage.getItem("token")){
        return children
    }
    else{
        return <Navigate to="/login"/>;
    }
}
