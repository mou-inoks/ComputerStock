import React from 'react'
import AccordionMenu from '../../Components/Accordion'
import ListComputer from '../../Components/Computers/ListComputer'
import Navbar from '../../Components/Navbar'
import { Typography } from '@mui/material'


const ListProcessorsScreen = () => {
 return (<>
 <div>
 <header className="App-header">
   <Navbar />
   <img src={require('../../imgs/logo.png')} />
  </header>
  <div id='accordion'>
   <AccordionMenu />
  </div>
  <Typography sx={{ fontWeight: 800, fontFamily: 'Gilroy,sans-serif', fontSize: '40px', position: 'absolute', left: '45%', top: '10%', color: '#bd5457' }} className='h1'>List of processors</Typography>
 </div>
 
 </>
 )
}

export default ListProcessorsScreen
