import React from 'react'
import AccordionMenu from '../../Components/Accordion'
import Navbar from '../../Components/Navbar'

export default function CreateUserScreen() {
  return (
    <div>
      <header className="App-header">
        <Navbar />
        <img src={require('../../imgs/logo.png')} />
      </header>
      <div id='accordion'>
        <AccordionMenu />
      </div>
    </div>

  )
}