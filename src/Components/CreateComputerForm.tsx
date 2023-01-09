import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Formik, FormikHelpers, Form } from 'formik'
import Navbar from '../Components/Navbar'
interface IValues {
  name: string,
  type: IType | null , 
  brand: string, 
  processorid: number | null , 
  ram: number | null, 
  stateid: number | null , 
  comment: string, 
}

interface InterfaceAliment {
  id: number;
  name: string;
  typeId: string;
}

interface IType {
  id: number, 
  type: string 
}


const  CreateComputerForm = () => {

  const typeArr: IType[] = []

  return (
    <div>
      <Typography sx={{ fontWeight: 800, fontFamily: 'Gilroy,sans-serif', fontSize: '50px', position: 'absolute', left: '43%', top: '10%', color:'#bd5457' }} className='h1'>Create a computer</Typography>
      <Formik<IValues>
        initialValues={{
          name: '',
          type: null, 
          brand: '', 
          processorid: null, 
          ram: null, 
          stateid: null, 
          comment: ''
        }}
        onSubmit={(
          values: IValues,
          { setSubmitting }: FormikHelpers<IValues>
        ) => {
        }}
      >
        {({ handleChange }) => {
          return <Form>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                onChange={handleChange}
                name='name'
                sx={{ position: 'absolute', left: '50%', top: '20%'}}
                required
                id="name"
                label="Name"
              />
              <TextField
                onChange={handleChange}
                name='name'
                sx={{ position: 'absolute', left: '50%', top: '30%'}}
                required
                id="name"
                label="Type"
              />
              <TextField
                onChange={handleChange}
                name='name'
                sx={{ position: 'absolute', left: '50%', top: '40%'}}
                required
                id="name"
                label="Brand"
              />
              <TextField
                onChange={handleChange}
                name='name'
                sx={{ position: 'absolute', left: '50%', top: '50%'}}
                required
                id="name"
                label="Processor"
              />
              <TextField
                onChange={handleChange}
                name='name'
                sx={{ position: 'absolute', left: '50%', top: '60%'}}
                required
                id="name"
                label="Ram"
              />
              <TextField
                onChange={handleChange}
                name='name'
                sx={{ position: 'absolute', left: '50%', top: '70%'}}
                required
                id="name"
                label="State"
              />
              <TextField
                onChange={handleChange}
                name='name'
                sx={{ position: 'absolute', left: '50%', top: '80%'}}
                required
                id="name"
                label="Comment"
              />

              <Button sx={{backgroundColor:'#bd5457', position:'absolute', left:'54%',top: '90%'}}variant='contained'>Add</Button>
            </Box>

          </Form>
        }}
      </Formik>
    </div>
  )
}

export default CreateComputerForm