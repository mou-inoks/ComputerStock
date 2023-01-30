import React, { useEffect, useState } from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import Autocomplete from '@mui/material/Autocomplete'
import { Computer, ComputerType, Processor, State } from './ComputerQuerys'
import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'


interface EditComputerProps {
 computer: Computer
}

const EditComputerForm = (value: EditComputerProps) => {

 const [stateArr, setStateArr] = useState<State[]>([])

 const [typeArr, setTypeArr] = useState<ComputerType[]>([])

 const [processorArr, setProcessorArr] = useState<Processor[]>([])

 const FetchFeedAllArrays = () => {
  axios.get('https://localhost:7107/api/ComputerStock/state').then(res => {
   console.log(res)
   setStateArr(res.data)
  }).catch(err => {
   console.log(err)
  })

  axios.get('https://localhost:7107/api/ComputerStock/type').then(res => {
   console.log(res)
   setTypeArr(res.data)
  }).catch(err => {
   console.log(err)
  })

  axios.get('https://localhost:7107/api/ComputerStock/processors').then(res => {
   console.log(res)
   setProcessorArr(res.data)
  }).catch(err => {
   console.log(err)
  })
 }

 useEffect(() => {
  FetchFeedAllArrays()
 }, [])

 return (<div>
  <Formik<Computer>
   initialValues={{
    id: value.computer.id,
    name: value.computer.name,
    type: value.computer.type,
    brand: value.computer.brand,
    processor: value.computer.processor,
    ram: value.computer.ram,
    state: value.computer.state,
    comment: value.computer.comment
   }}
   onSubmit={(
    values: Computer,
    { setSubmitting }: FormikHelpers<Computer>
   ) => {
    /* Ajouter method de modification d'un élément*/
    axios.post('https://localhost:7107/api/ComputerStock/update', values).then(()=> alert("Computer Sucessfully modified"))
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
       sx={{ position: 'absolute', top: '20%', color:'white' }}
       required
       defaultValue={values.name}
       id="name"
       label="Name"
      />
      <Autocomplete
       onChange={(e, v) => values.type = v}
       getOptionLabel={(options) => options.type}
       defaultValue={values.type}
       sx={{ width: 240, position: 'absolute', top: '35%' }}
       options={typeArr}
       renderInput={(params) => <TextField name='type' {...params} label="Type" />}
      />
      <TextField
       onChange={handleChange}
       defaultValue={values.brand}
       name='brand'
       sx={{ position: 'absolute', top: '50%' }}
       required
       id="brand"
       label="Brand"
      />
      <Autocomplete
       onChange={(e, v) => values.processor = v}
       getOptionLabel={(options) => options.name}
       defaultValue={values.processor}
       sx={{ width: 240, position: 'absolute', top: '65%' }}
       options={processorArr}
       renderInput={(params) => <TextField name='processor'{...params} label="Processor" />}
      />
      <TextField
       onChange={handleChange}
       name='ram'
       sx={{ position: 'absolute', left: '50%', top: '20%' }}
       required
       defaultValue={values.ram}
       id="ram"
       label="Ram"
      />
      <Autocomplete
       onChange={(e, v) => {
        values.state = v
        console.log("state", v)
       }}
       getOptionLabel={(options) => options.state}
       defaultValue={values.state}
       sx={{ width: 240, position: 'absolute', left: '50%', top: '35%' }}
       options={stateArr}
       renderInput={(params) => <TextField {...params} name='state' label="State" />}
      />
      <TextField
       onChange={handleChange}
       name='comment'
       defaultValue={values.comment}
       sx={{ position: 'absolute', left: '50%', top: '50%' }}
       required
       multiline
       rows={5}
       maxRows={5}
       id="comment"
       label="Comment"
      />

     </Box>
     <Button type='submit' sx={{ backgroundColor: '#bd5457', position: 'absolute', left: '40%', top: '85%', ":hover": { backgroundColor: '#874143' } }} variant='contained'>Modify</Button>
    </Form>
   }}
  </Formik>
 </div>

 )
}

export default EditComputerForm