import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<NoMatch />} />
        </Routes>
      </>
    </>
  );
}

export default App;
