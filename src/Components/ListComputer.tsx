import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
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
    field: 'typeid',
    headerName: 'Type',
    width: 100,
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
    <Box sx={{ height: 400, width: '40%', alignSelf: 'center', position: 'absolute', left: '40%', top: '30%' }}>
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

    <Button
      sx={{ position: 'absolute', top: '70%', left: '65%', backgroundColor: '#bd5457' }}
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

    <Button sx={{ position: 'absolute', top: '70%', left: '73%', backgroundColor: '#bd5457' }} variant="contained"><Link style={{ textDecoration: 'none', color: 'white' }} to={'/create-computer'}>Ajouter</Link></Button>
  </>

  );
}

export default ListOfIngredients