import React from 'react'
import AccordionMenu from '../../Components/Accordion'
import ListComputer from '../../Components/Computers/ListComputer'
import Navbar from '../../Components/Navbar'
import { Typography } from '@mui/material'


const ListComputerScreen = () => {
  return (
    <div>
      <header>
        <img src={require('../../imgs/logo.png')} />
        <Navbar />
      </header>
      <div id='accordion'>
        <AccordionMenu />
        <ListComputer /> 
      </div>

    </div>
  )
}

export default ListComputerScreen
