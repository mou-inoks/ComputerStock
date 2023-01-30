import React from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import {  User } from '../Computers/ComputerQuerys'
import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'


const EditUserForm = (user: User) => {
 return (<div>
  <Formik<User>
   initialValues={{
    id: user.id,
    name: user.name
   }}
   onSubmit={(
    values: User,
    { setSubmitting }: FormikHelpers<User>
   ) => {
    /* Ajouter method de modification d'un élément*/
    axios.post('https://localhost:7107/api/ComputerStock/user/update', values).then(()=> alert("Computer Sucessfully modified"))
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
       name='state'
       sx={{ position: 'absolute', top: '30%', left: '30%' }}
       required
       defaultValue={values.name}
       id="state"
       label="State"
      />

     </Box>
     <Button type='submit' sx={{ backgroundColor: '#bd5457', position: 'absolute', left: '40%', top: '85%', ":hover": { backgroundColor: '#874143' } }} variant='contained'>Edit</Button>
    </Form>
   }}
  </Formik>
 </div>

 )
}

export default EditUserForm