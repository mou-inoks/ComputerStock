import React from 'react'
import AccordionMenu from '../Components/Accordion'
import CreateComputerForm from '../Components/CreateComputerForm'
import Navbar from '../Components/Navbar'

export default function CreateComputerScreen() {
  return (
    <div>
      <header className="App-header">
        <Navbar />
        <img src={require('../imgs/logo.png')} />
      </header>
      <div id='accordion'>
        <AccordionMenu />
      </div>
      <CreateComputerForm/>
    </div>

  )
}
