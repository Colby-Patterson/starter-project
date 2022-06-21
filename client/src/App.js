import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/shared/Navbar'
import Home from './components/shared/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import NoMatch from './components/shared/NoMatch'
import FetchUser from './components/auth/FetchUser';

function App() {
  return (
    <>
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
