import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Formik, FormikHelpers, Form } from 'formik'
import Navbar from '../Components/Navbar'
import Autocomplete from '@mui/material/Autocomplete'
interface IValues {
  name: string,
  typeid: number | null,
  brand: string,
  processorid: number | null,
  ram: number | null,
  stateid: number | null,
  comment: string,
}

interface IType {
  id: number,
  type: string
}

interface IState {
  id: number,
  state: string
}

interface IProcessor {
  id: number,
  name: string,
  niveau: string,
  vitesse: string
}


const CreateComputerForm = () => {

  const [stateArr, setStateArr] = useState<IState[]>([])

  const [typeArr, setTypeArr] = useState<IType[]>([])

  const [processorArr, setProcessorArr] = useState<IProcessor[]>([])

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



  return (
    <div>
      <Typography sx={{ fontWeight: 800, fontFamily: 'Gilroy,sans-serif', fontSize: '40px', position: 'absolute', left: '45%', top: '10%', color: '#bd5457' }} className='h1'>Create a computer</Typography>
      <Formik<IValues>
        initialValues={{
          name: '',
          typeid: null,
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
        {({values, handleChange, setFieldValue }) => {
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
                label="Name"
              />
              <Autocomplete
                onChange={(e, v) => values.typeid =  v?.id!}
                getOptionLabel={(options) => options.type}
                sx={{ width: 240, position: 'absolute', left: '58%', top: '20%'  }}
                options={typeArr}
                renderInput={(params) => <TextField {...params} label="Type" />}
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
                onChange={(e, v) => values.processorid =  v?.id!}
                getOptionLabel={(options) => options.name}
                sx={{ width: 240, position: 'absolute', left: '58%', top: '30%'  }}
                options={processorArr}
                renderInput={(params) => <TextField {...params} label="Processor" />}
              />
              <TextField
                onChange={handleChange}
                name='ram'
                sx={{ position: 'absolute', left: '43%', top: '40%' }}
                required
                id="ram"
                label="Ram"
              />
              <Autocomplete
                onChange={(e, v) => values.stateid =  v?.id!}
                getOptionLabel={(options) => options.state}
                sx={{ width: 240, position: 'absolute', left: '58%', top: '40%'  }}
                options={stateArr}
                renderInput={(params) => <TextField {...params} label="State" />}
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

              <Button sx={{ backgroundColor: '#bd5457', position: 'absolute', left: '55.5%', top: '70%' }} variant='contained'>Add</Button>
            </Box>

          </Form>
        }}
      </Formik>
    </div>
  )
}

export default CreateComputerForm