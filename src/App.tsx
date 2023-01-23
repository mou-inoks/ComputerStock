import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import ListComputerScreen from './Pages/ListComputerScreen';
import CreateComputerScreen from './Pages/CreateComputerScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ListComputerScreen/>}/>
        <Route path='/create-computer' element={<CreateComputerScreen/>}/>
        <Route path='/list-computer' element={<ListComputerScreen/>}/>
        <Route path='/list-users' element={<ListComputerScreen/>}/>
        <Route path='/create-users' element={<ListComputerScreen/>}/>
      </Routes> 
    </div>
  );
}

export default App;
