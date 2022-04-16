import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/shared/Header/Header';
import SignIn from './Pages/Login/SignIn/SignIn';
import SignUp from './Pages/Login/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
    </div>
  );
}

export default App;
