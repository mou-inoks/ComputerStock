import React from 'react'
import { ComputerDto } from '../Dtos'
import '../../css/Details.css'
import { Box } from '@mui/material'

interface DetailsComputerProps {
 computer: ComputerDto
}

const DetailsComputer = (value: DetailsComputerProps) => {
 return (
  <Box component='div' className='container'>
   <div className='details'>Name: {value.computer.name}</div>
   <div className='details'>Type: {value.computer.type?.type}</div>
   <div className='details'>Brand: {value.computer.brand}</div>
   <div className='details'>Processor: {value.computer.processor?.name} {value.computer.processor?.niveau} {value.computer.processor?.vitesse} </div>
   <div className='details'>Brand: {value.computer.brand}</div>
   <div className='details'>Ram: {value.computer.ram}Go</div>
   <div className='details'>State: {value.computer.state?.state}</div>
  </Box>


 )
}

export default DetailsComputer