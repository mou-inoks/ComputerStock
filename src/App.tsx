import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import AccordionMenu from './Components/Accordion';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import CreateComputer from './Pages/CreateComputer';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/create-computer' element={<CreateComputer/>}/>
      </Routes> 
    </div>
  );
}

export default App;
