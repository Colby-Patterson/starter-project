import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/shared/Navbar'
import Home from './components/shared/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import NoMatch from './components/shared/NoMatch'
import FetchUser from './components/auth/FetchUser';
import reset from "styled-reset"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  ${reset}`
  ;

function App() {
  return (
    <>
    <GlobalStyle />
      <Navbar />
      <>
      <FetchUser>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<NoMatch />} />
        </Routes>
        </FetchUser>
      </>
    </>
  );
}

export default App;
