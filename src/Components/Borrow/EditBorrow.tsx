import React, { useState, useEffect } from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import { Borrow, Computer, User } from '../Computers/ComputerQuerys'
import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import Autocomplete from '@mui/material/Autocomplete/Autocomplete'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


export interface BorrowPorps {
 borrow: Borrow
}

const EditBorrowForm = (props: BorrowPorps) => {

 const [userArr, setUserArr] = useState<User[]>([])

 const [computersArr, setComputerArr] = useState<Computer[]>([])

 const [fromDate, setFromDate] = useState<Date>(props.borrow.fromDate)

 const [toDate, setToDate] = useState<Date>(props.borrow.toDate)


 const handleFromDateChange = (v: Date | null) => {

  setFromDate(v ?? new Date())

 }
 const handleToDateChange = (v: Date | null) => {
  setToDate(v ?? new Date())

 }


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
  if (e.state?.state != "In Stock") {
   return e
  }
  else return null
 })

 useEffect(() => {
  FetchFeedAllArrays()
 }, [])


 return (<div>
  <Formik<Borrow>
   initialValues={{
    id: props.borrow.id,
    computer: props.borrow.computer,
    user: props.borrow.user,
    fromDate: props.borrow.fromDate,
    toDate: props.borrow.toDate
   }}
   onSubmit={(
    values: Borrow,
    { setSubmitting }: FormikHelpers<Borrow>
   ) => {
    /* Ajouter method de modification d'un élément*/
    axios.post('https://localhost:7107/api/computer-stock/user/update', values).then(() => alert("Borrow Sucessfully modified")).then(() => setSubmitting(true))
   }}
  >
   {({ values }) => {
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
       sx={{ width: 240, position: 'absolute', left: '30%', top: '20%' }}
       options={computerArrFiltered}
       renderInput={(params) => <TextField name='type' {...params} label="Computers Available" />}
      />

      <Autocomplete
       onChange={(e, v) => {
        values.user = v
        console.log("users", v)
       }}
       getOptionLabel={(options) => options.name}
       sx={{ width: 240, position: 'absolute', left: '30%', top: '35%' }}
       options={userArr}
       renderInput={(params) => <TextField name='type' {...params} label="User" />}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
       <DesktopDatePicker
        label="From Date"
        value={values.fromDate}
        inputFormat="DD/MM/YYYY"
        className='datePickerInEditForm'
        onChange={(e) => handleFromDateChange(e)}
        renderInput={(params) => <TextField {...params} />}
       />

       <DesktopDatePicker
        label="To Date"
        value={values.toDate}
        inputFormat="DD/MM/YYYY"
        className='datePickerInEditForm'
        onChange={(e) => handleToDateChange(e)}
        renderInput={(params) => <TextField {...params} />}
       />
      </LocalizationProvider>


     </Box>
     <Button type='submit' sx={{ backgroundColor: '#bd5457', position: 'absolute', left: '40%', top: '85%', ":hover": { backgroundColor: '#874143' } }} variant='contained'>Edit</Button>
    </Form>
   }}
  </Formik>
 </div>

 )
}

export default EditBorrowForm