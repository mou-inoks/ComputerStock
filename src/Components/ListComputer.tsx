import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';


const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Nom',
    width: 100,
    editable: false,
  },
  {
    field: 'typeId',
    headerName: 'Type',
    width: 150,
    editable: false,
  },
  {
    field: 'stateId',
    headerName: 'State',
    width: 150,
    editable: false,
  },
  {
    field: 'brand',
    headerName: 'Brand',
    width: 100,
    editable: false,
  },
  {
    field: 'ram',
    headerName: 'Ram',
    width: 50,
    editable: false,
  },
  {
    field: 'comment',
    headerName: 'Comment',
    width: 250,
    editable: false,
  },

];

const ListOfIngredients = () => {

  const [computers, setComputers] = useState([])

  const [isDisabled, setDisabled] = useState(true)

  const [arrData, setArrData] = useState<number[]>([])

  console.log(computers)

  const FetchGetComputersList = () => {
    axios.get('https://localhost:7107/api/ComputerStock').then(res => {
      console.log(res)
      setComputers(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  const FetchDeleteComputer = (id: number) => {
    fetch('https://localhost:7185/api/Aliments/' + id, {
      method: 'DELETE'
    }).then(r => {
      FetchGetComputersList()
    })
  }

  useEffect(() => {
    FetchGetComputersList()
  }, [])


  return (<>
    <Grid container spacing={2} >

      <Grid item xs={12}>
        <Box sx={{ height: 400, width: '40%', left: '35%', position: 'absolute', top: '30%', backgroundColor: '#4e4e4e' }}>
          <DataGrid
            components={{ Toolbar: GridToolbar }}
            sx={{ height: '100%', width: '100%', color: 'white' }}
            rows={computers}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            onSelectionModelChange={(d) => {
              if (d.length > 0)
                setDisabled(false)
              d.map((e) => arrData.push(Number(e)))
              if (d.length <= 0)
                setDisabled(true)
            }}
            checkboxSelection
          />
        </Box>
      </Grid>

      <Grid item xs={5} />

      <Grid item xs={2}>
        <Button
          sx={{ position: 'absolute', top: '70%', left: '60%', backgroundColor: '#bd5457' }}
          variant="contained"
          onClick={() => {
            arrData.map(async (e) => {
              console.log('https://localhost:7185/api/Aliments/Repas/' + e)
              FetchDeleteComputer(e)

            })
          }}
          disabled={isDisabled}
        >
          Supprimer
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button sx={{ position: 'absolute', top: '70%', left: '67%', backgroundColor: '#bd5457' }} variant="contained"><Link style={{ textDecoration: 'none', color: 'white' }} to={'/create-computer'}>Ajouter</Link></Button>
      </Grid>
    </Grid>
  </>
  );
}

export default ListOfIngredients
