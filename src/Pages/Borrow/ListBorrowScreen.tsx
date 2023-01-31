import React from 'react'
import AccordionMenu from '../../Components/Accordion'
import Navbar from '../../Components/Navbar'

export default function ListBorrowScreen() {
  return (
    <div>
      <header >
        <img src={require('../../imgs/logo.png')} />
        <Navbar />
      </header>
      <div id='accordion'>
        <AccordionMenu />
      </div>
    </div>

  )
}
