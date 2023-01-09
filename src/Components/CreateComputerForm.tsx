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


const  CreateComputer = () => {

  const typeArr: IType[] = []

  return (
    <div>
      <Typography sx={{ fontWeight: 800, fontFamily: 'Gilroy,sans-serif', fontSize: '60px' }} className='h1'>Create a computer</Typography>
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
                sx={{ position: 'absolute', left: '43%', top: '20%' }}
                required
                id="name"
                label="Nom"
              />
            </Box>

            <Button type='submit' sx={{ top: '35rem', left: '47.5%' }} variant="contained">Add</Button>
          </Form>
        }}
      </Formik>
    </div>
  )
}

export default CreateComputer