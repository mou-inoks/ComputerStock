import React from 'react'
import AccordionMenu from '../../Components/Accordion'
import BorrowForm from '../../Components/Borrow/BorrowForm'
import Navbar from '../../Components/Navbar'

export default function CreateBorrowScreen() {
  return (
    <div>
      <header >
        <img src={require('../../imgs/logo.png')} />
        <Navbar />
      </header>
      <div id='accordion'>
        <AccordionMenu />
        <BorrowForm />
      </div>
    </div>

  )
}
