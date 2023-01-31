import React, { useState } from 'react'
import AccordionMenu from '../../Components/Accordion'
import ListComputer from '../../Components/Computers/ListComputer'
import Navbar from '../../Components/Navbar'
import { Typography } from '@mui/material'
import { Checkbox } from '@mui/material'
import { FormControlLabel } from '@mui/material';
import '../../css/Details.css'


const ListComputerScreen = () => {
  const [checkbox, setCheckbox] = useState(false)
  return (
    <div>
      <header>
        <img src={require('../../imgs/logo.png')} />
        <Navbar />
      </header>
      <div id='accordion'>
        <AccordionMenu />
        <Typography sx={{ fontWeight: 800, fontFamily: 'Gilroy,sans-serif', fontSize: '40px', position: 'absolute', left: '45%', top: '10%', color: '#bd5457' }} className='h1'>List of Computers</Typography>
        <FormControlLabel id='checkbox' control={<Checkbox defaultChecked={false} value={checkbox} onClick={() => setCheckbox(!checkbox)}/>} label="Only in stock" />
        <ListComputer isOnlyFreeChecked={checkbox} /> 
      </div>

    </div>
  )
}

export default ListComputerScreen
