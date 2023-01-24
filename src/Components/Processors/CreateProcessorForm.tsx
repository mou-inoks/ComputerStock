import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Formik, FormikHelpers, Form } from 'formik'
import { Processor } from '../Computers/ComputerQuerys'     


const CreateProcessorForm = () => {
  return (
    <div>
      <Typography sx={{ fontWeight: 800, fontFamily: 'Gilroy,sans-serif', fontSize: '40px', position: 'absolute', left: '45%', top: '10%', color: '#bd5457' }} className='h1'>Create a Processor</Typography>
      <Formik<Processor>
        initialValues={{
          id: 0,
          name: '',
          niveau: '',
          vitesse: ''
        }}
        onSubmit={(
          values: Processor,
          { setSubmitting }: FormikHelpers<Processor>
        ) => {
         axios.post('https://localhost:7107/api/ComputerStock/processors', values).then(res => {
          console.log(res)
          setSubmitting(true)
          alert('Processor created sucessfully ')
         })
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
                sx={{ position: 'absolute', left: '43%', top: '20%', backgroundColor: '#3A3A3A' }}
                required
                id="name"
                label="Name"
              />
               <TextField
                onChange={handleChange}
                name='niveau'
                sx={{ position: 'absolute', left: '43%', top: '30%', backgroundColor: '#3A3A3A' }}
                required
                id="niveau"
                label="Niveau"
              />
              <TextField
                onChange={handleChange}
                name='vitesse'
                sx={{ position: 'absolute', left: '60%', top: '20%', backgroundColor: '#3A3A3A' }}
                required
                id="vitesse"
                label="Vitesse"
              />
            </Box>
            <Button type='submit' sx={{ backgroundColor: '#bd5457', position: 'absolute', left: '55.5%', top: '40%', ":hover": { backgroundColor: '#874143' } }} variant='contained'>Add</Button>
          </Form>
        }}
      </Formik>
    </div>
  )
}

export default CreateProcessorForm