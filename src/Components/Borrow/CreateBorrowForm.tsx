import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Formik, FormikHelpers, Form } from 'formik'
import Autocomplete from '@mui/material/Autocomplete'
import { Borrow, Computer, User } from '../Computers/ComputerQuerys'
import { DatePicker, DesktopDatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import moment from 'moment'

export default function BorrowForm() {

  const [userArr, setUserArr] = useState<User[]>([])

  const [computersArr, setComputerArr] = useState<Computer[]>([])

  const [fromDate, setFromDate] = useState<Date>(new Date())

  const [toDate, setToDate] = useState<Date>(new Date())

  const FetchFeedAllArrays = () => {
    axios.get('https://localhost:7107/api/computer-stock/user').then(res => {
      console.log(res)
      setUserArr(res.data)
    }).catch(err => {
      console.log(err)
    })

    axios.get('https://localhost:7107/api/computer-stock').then(res => {
      console.log(res)
      setComputerArr(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  const computerArrFiltered = computersArr.filter((e) => {
    if (e.state?.state == "In Stock") {
      return e
    }
    else return null
  })

  useEffect(() => {
    FetchFeedAllArrays()
  }, [])


  return (
    <div>
      <Typography sx={{ fontWeight: 800, fontFamily: 'Gilroy,sans-serif', fontSize: '40px', position: 'absolute', left: '50%', top: '10%', color: '#bd5457' }} className='h1'>New Borrow</Typography>
      <Formik<Borrow>
        initialValues={{
          id: 0,
          fromDate: fromDate,
          toDate: toDate,
          user: null,
          computer: null
        }}
        onSubmit={(
          values: Borrow,
          { setSubmitting }: FormikHelpers<Borrow>
        ) => {
          console.log(values)

          let param: Borrow = {
            ...values,
            fromDate: moment(values.fromDate).startOf('day').utc(true).toDate(),
            toDate: moment(values.toDate).startOf('day').utc(true).toDate()
          }
          axios.post('https://localhost:7107/api/computer-stock/borrow', param)
            .then(function (response) {
              alert('A new borrow as been added sucessfully')
              setSubmitting(true)
              
              console.log(response)
            })
            .catch(function (error) {
              console.log(error)
            });

        }}
      >
        {({ values, handleChange }) => {

          const handleFromDateChange = (v: Date | null) => {

            setFromDate(v ?? new Date())

          }
          const handleToDateChange = (v: Date | null) => {
            setToDate(v ?? new Date())

          }

          return <Form>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <Autocomplete
                onChange={(e, v) => {
                  values.computer = v
                  console.log("computer", v)
                }}
                getOptionLabel={(options) => options.name}
                sx={{ width: 240, position: 'absolute', left: '51%', top: '20%' }}
                options={computerArrFiltered}
                renderInput={(params) => <TextField name='type' {...params} label="Computers Available" />}
              />

              <Autocomplete
                onChange={(e, v) => {
                  values.user = v
                  console.log("users", v)
                }}
                getOptionLabel={(options) => options.name}
                sx={{ width: 240, position: 'absolute', left: '51%', top: '30%' }}
                options={userArr}
                renderInput={(params) => <TextField name='type' {...params} label="User" />}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="From Date"
                  value={values.fromDate}
                  inputFormat="DD/MM/YYYY"
                  className='datePicker'
                  onChange={(e) => handleFromDateChange(e)}
                  renderInput={(params) => <TextField {...params} />}
                />

                <DesktopDatePicker
                  label="To Date"
                  value={values.toDate}
                  inputFormat="DD/MM/YYYY"
                  className='datePicker'
                  onChange={(e) => handleToDateChange(e)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

            </Box>
            <Button type='submit' sx={{ backgroundColor: '#bd5457', position: 'absolute', left: '55.5%', top: '70%', ":hover": { backgroundColor: '#874143' } }} variant='contained'>Add</Button>
          </Form>
        }}
      </Formik>
    </div>
  )
}
