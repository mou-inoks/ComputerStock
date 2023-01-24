import React from 'react'
import AccordionMenu from '../../Components/Accordion'
import CreateComputerForm from '../../Components/Computers/CreateComputerForm'
import Navbar from '../../Components/Navbar'
import CreateProcessorForm from '../../Components/Processors/CreateProcessorForm'

export default function CreateProcessorScreen() {
  return (
    <div>
      <header className="App-header">
        <Navbar />
        <img src={require('../../imgs/logo.png')} />
      </header>
      <div id='accordion'>
        <AccordionMenu />
      </div>
      <CreateProcessorForm />
    </div>

  )
}
