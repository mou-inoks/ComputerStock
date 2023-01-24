import React, { useEffect, useState } from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import Autocomplete from '@mui/material/Autocomplete'
import { Computer, ComputerType, Processor, State } from '../Computers/ComputerQuerys'
import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'


const EditProcessorForm = (processor: Processor) => {


 return (<div>
  <Formik<Processor>
   initialValues={{
    id: processor.id,
    name: processor.name,
    niveau: processor.niveau,
    vitesse: processor.vitesse
   }}
   onSubmit={(
    values: Processor,
    { setSubmitting }: FormikHelpers<Processor>
   ) => {
    /* Ajouter method de modification d'un élément*/
    axios.post('https://localhost:7107/api/ComputerStock/update', values).then(() => alert("Computer Sucessfully modified"))
   }}
  >
   {({ values, handleChange }) => {
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
     <Button type='submit' sx={{ backgroundColor: '#bd5457', position: 'absolute', left: '40%', top: '85%', ":hover": { backgroundColor: '#874143' } }} variant='contained'>Modify</Button>
    </Form>
   }}
  </Formik>
 </div>

 )
}

export default EditProcessorForm