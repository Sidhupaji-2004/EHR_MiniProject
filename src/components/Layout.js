import React from 'react';
import "../styles/LayoutStyles.css";
import { SidebarMenu } from './data';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout = ({children}) => {
  const {user} = useSelector(state => state.user)
  const location = useLocation()

  return (
    <>
      <div className="main">
        <div className="layout">
            <div className="sidebar">
                <div className="logo">
                  <h2>Medicare</h2>
                  <br />
                </div>
                <div className="menu">
                  {SidebarMenu.map(menu => {
                    const isActive = location.pathname === menu.path
                    return(
                      <>
                        <div className={`menu-item ${isActive && "active"}`}>
                          <i className={menu.icon}></i>
                          <Link to={menu.path}>{menu.name}</Link>
                        </div>
                      </>
                    )
                  })}
                </div>
            </div>
            <div className="content">
                <div className="header">
                  Header</div>
                <div className="body">{children}</div>
            </div>

        </div>
      </div>
    </>
  )
}

export default Layout
