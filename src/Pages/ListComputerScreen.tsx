import React from 'react'
import AccordionMenu from '../Components/Accordion'
import ListComputer from '../Components/ListComputer'
import Navbar from '../Components/Navbar'

const ListComputerScreen = () => {
 return (<>
 <div>
 <header className="App-header">
   <Navbar />
   <img src={require('../imgs/logo.png')} />
  </header>
  <div id='accordion'>
   <AccordionMenu />
  </div>
  <ListComputer />
 </div>
 
 </>
 )
}

export default ListComputerScreen
