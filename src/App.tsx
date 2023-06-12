import React from 'react';
import './App.css';
import UserContextProvider from "./Context/Context"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">

      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form/>} />
            {/* <Route path="/Logout" element={< Logout/>} /> */}
            <Route path="/Home" element={< Home/>} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
