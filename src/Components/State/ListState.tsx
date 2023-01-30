import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import '../../css/TableCss.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { State } from '../Computers/ComputerQuerys';
import EditComputerStateForm from './EditComputerStateForm';

const ListOfIngredients = () => {

  const [computersState, setComputersStates] = useState<Array<State>>([])

  const [open, setOpen] = useState(false);
  
  const [tempComputerState, setTempComputerState] = useState<State>();

  const GetAllComputers = () => {
    axios.get('https://localhost:7107/api/ComputerStock/state').then(res => {
      setComputersStates(res.data)
    })
  }

  const handleOpen = (v: State) => {
    setTempComputerState(v)
    setOpen(true);

  };
  const handleClose = () => {
    setOpen(false);
    GetAllComputers()
  };

  useEffect(() => {
    GetAllComputers()
  }, [])

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };


  return (<>
    <table className='table'>
      <tbody>
        <tr className='table-header'>
          <th className='header__item'>
            <a href='create-state'><AddCircleIcon /></a>
            Action
          </th>
          <th className='header__item'>State</th>
        </tr>
        <tr>
          {computersState.map((computerState) => {
            return (
              <>
                <div className='table-row'>
                  <td className='table-data'>
                    <button className='actions' onClick={() => handleOpen(computerState)}>
                      <EditIcon />
                    </button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="parent-modal-title"
                      aria-describedby="parent-modal-description"
                    >
                      <Box sx={{ ...modalStyle, width: 600, height: 500 }}>
                        <h1 style={{position:'relative', left:'30%'}}>Edit {tempComputerState?.state}</h1>
                        <EditComputerStateForm state={tempComputerState?.state!} id={tempComputerState?.id!} /> 
                      </Box>
                    </Modal>
                    <button className='actions' onClick={() => {
                      axios.delete('https://localhost:7107/api/ComputerStock/state/ ' + tempComputerState?.id).then(() => {
                        GetAllComputers()
                      })
                    }}><DeleteIcon /></button>
                  </td>
                  <td className='table-data'>{computerState.state}</td>
                </div>

              </>
            )
          })}
        </tr>
      </tbody>
    </table>

  </>
  );
}

export default ListOfIngredients