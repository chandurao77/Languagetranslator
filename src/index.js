import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login';
import RegistrationPage from './components/Registration';
import Translator from './components/Translator';
import PageNotFound from './components/PageNotFound';
import AboutPage from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>}>
          <Route path='' element={<LoginPage></LoginPage>}></Route>
          <Route path='/register' element={<RegistrationPage></RegistrationPage>}></Route>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
          <Route path='/text-translate' element={<Translator></Translator>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
