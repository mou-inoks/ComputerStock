import React, { useState } from 'react'
import AccordionMenu from '../../Components/Accordion'
import Navbar from '../../Components/Navbar'
import BorrowList from '../../Components/Borrow/BorrowList'
import { Checkbox, FormControlLabel, Typography } from '@mui/material'

export default function ListBorrowScreen() {
  const [checkbox, setCheckbox] = useState(false)
  return (
    <div>
      <header >
        <img src={require('../../imgs/logo.png')} />
        <Navbar />
      </header>
      <div id='accordion'>
        <AccordionMenu />
        <Typography sx={{ fontWeight: 800, fontFamily: 'Gilroy,sans-serif', fontSize: '40px', position: 'absolute', left: '50%', top: '10%', color: '#bd5457' }} className='h1'>List of Borrows</Typography>
        <FormControlLabel id='checkbox' control={<Checkbox defaultChecked={false} value={checkbox} onClick={() => setCheckbox(!checkbox)} />} label="Still in borrow" />
        <BorrowList stillInBorrow={checkbox}/> 
      </div>
    </div>

  )
}
