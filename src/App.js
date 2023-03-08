import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from "./components/Navbar"
import LoginPage from './components/Login';
import RegistrationPage from './components/Registration';

import Translator from './components/Translator';
import { Outlet } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      
        <AppNavbar></AppNavbar>
        {/* <LoginPage></LoginPage> */}
        
      {/* <RegistrationPage></RegistrationPage> */}
      {/* <Translator></Translator> */}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
