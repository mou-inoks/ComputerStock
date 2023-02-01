import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Formik, FormikHelpers, Form } from 'formik'
import Autocomplete from '@mui/material/Autocomplete'
import { Computer, Processor, State, ComputerType } from './ComputerQuerys'


const CreateComputerForm = () => {

  const [stateArr, setStateArr] = useState<State[]>([])

  const [typeArr, setTypeArr] = useState<ComputerType[]>([])

  const [processorArr, setProcessorArr] = useState<Processor[]>([])

  const FetchFeedAllArrays = () => {
    axios.get('https://localhost:7107/api/state').then(res => {
      console.log(res)
      setStateArr(res.data)
    }).catch(err => {
      console.log(err)
    })

    axios.get('https://localhost:7107/api/type').then(res => {
      console.log(res)
      setTypeArr(res.data)
    }).catch(err => {
      console.log(err)
    })

    axios.get('https://localhost:7107/api/processors').then(res => {
      console.log(res)
      setProcessorArr(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    FetchFeedAllArrays()
  }, [])


  return (
    <div>
      <Typography sx={{ fontWeight: 800, fontFamily: 'Gilroy,sans-serif', fontSize: '40px', position: 'absolute', left: '45%', top: '10%', color: '#bd5457' }} className='h1'>Create a computer</Typography>
      <Formik<Computer>
        initialValues={{
          id: 0,
          name: '',
          type: null,
          brand: '',
          processor: null,
          ram: 0,
          state: null,
          comment: ''
        }}
        onSubmit={(
          values: Computer,
          { setSubmitting }: FormikHelpers<Computer>
        ) => {
          console.log(values)
          axios.post('https://localhost:7107/api/computer-stock', {
            name: values.name,
            type: values.type,
            brand: values.brand,
            processor: values.processor,
            ram: values.ram,
            state: values.state,
            comment: values.comment
          })
            .then(function (response) {
              alert('A new computer as been added sucessfully ')
              setSubmitting(true)
              console.log(response)
            })
            .catch(function (error) {
              console.log(error)
            });

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
                sx={{ position: 'absolute', left: '43%', top: '20%',  }}
                required
                id="name"
                label="Name"
              />
              <Autocomplete
                onChange={(e, v) => {
                  values.type = v
                  console.log("type", v)
                }}
                getOptionLabel={(options) => options.type}
                sx={{ width: 240, position: 'absolute', left: '58%', top: '20%' }}
                options={typeArr}
                renderInput={(params) => <TextField name='type' {...params} label="Type"  />}
              />
              <TextField
                onChange={handleChange}
                name='brand'
                sx={{ position: 'absolute', left: '43%', top: '30%' }}
                required
                id="brand"
                label="Brand"
              />
              <Autocomplete
                onChange={(e, v) => {
                  values.processor = v
                  console.log("processor", v)
                }}
                getOptionLabel={(options) => `${options.name} ${options.niveau} ${options.vitesse}`}
                sx={{ width: 240, position: 'absolute', left: '58%', top: '30%' }}
                options={processorArr}
                renderInput={(params) => <TextField name='processor'{...params} label="Processor"  />}
              />
              <TextField
                onChange={handleChange}
                name='ram'
                sx={{ position: 'absolute', left: '43%', top: '40%'}}
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
                sx={{ width: 240, position: 'absolute', left: '58%', top: '40%' }}
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
            <Button type='submit' sx={{ backgroundColor: '#bd5457', position: 'absolute', left: '55.5%', top: '70%', ":hover": { backgroundColor: '#874143' } }} variant='contained'>Add</Button>
          </Form>
        }}
      </Formik>
    </div>
  )
}

export default CreateComputerForm