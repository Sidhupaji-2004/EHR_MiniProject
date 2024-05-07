import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import PublicRoute from './components/PublicRoute.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
          } />
          <Route path='/login' element={
              <Login />
          }/>
          <Route path='/' 
            element={
                <Login />
            }
          />
          <Route path='/register' element={
              <Register/>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
