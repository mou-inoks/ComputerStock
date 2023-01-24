import React, { useEffect, useState } from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import Autocomplete from '@mui/material/Autocomplete'
import { Computer, ComputerType, Processor, State } from './ComputerQuerys'
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'


const EditComputerForm = (computer: Computer) => {

 const [stateArr, setStateArr] = useState<State[]>([])

  const [typeArr, setTypeArr] = useState<ComputerType[]>([])

  const [processorArr, setProcessorArr] = useState<Processor[]>([])
  console.log("in the component",computer)

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

 return(<div>
  <Formik<Computer>
    initialValues={{
      id: computer.id,
      name: computer.name,
      type: computer.type,
      brand: computer.brand,
      processor: computer.processor,
      ram: computer.ram,
      state: computer.state,
      comment: computer.comment
    }}
    onSubmit={(
      values: Computer,
      { setSubmitting }: FormikHelpers<Computer>
    ) => {
      

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
            sx={{ position: 'absolute', top: '20%'}}
            required
            id="name"
            label="Name"
          />
          <Autocomplete
            onChange={(e, v) => {
              values.type = v
            }}
            getOptionLabel={(options) => options.type}
            sx={{ width: 240, position: 'absolute', top: '35%' }}
            options={typeArr}
            renderInput={(params) => <TextField name='type' {...params} label="Type"  />}
          />
          <TextField
            onChange={handleChange}
            name='brand'
            sx={{ position: 'absolute',  top: '50%'}}
            required
            id="brand"
            label="Brand"
          />
          <Autocomplete
            onChange={(e, v) => {
              values.processor = v
              console.log("processor", v)
            }}
            getOptionLabel={(options) => options.name}
            sx={{ width: 240, position: 'absolute', top: '65%' }}
            options={processorArr}
            renderInput={(params) => <TextField name='processor'{...params} label="Processor"  />}
          />
          <TextField
            onChange={handleChange}
            name='ram'
            sx={{ position: 'absolute', left: '50%', top: '20%' }}
            required
            id="ram"
            label="Ram"
          />
          <Autocomplete
            onChange={(e, v) => {
              values.state = v
              console.log("state", v)
            }}
            getOptionLabel={(options) => options.state}
            sx={{ width: 240, position: 'absolute', left: '50%', top: '35%' }}
            options={stateArr}
            renderInput={(params) => <TextField {...params} name='state' label="State" />}
          />
          <TextField
            onChange={handleChange}
            name='comment'
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