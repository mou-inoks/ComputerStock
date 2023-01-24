import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Computer } from './ComputerQuerys'
import '../css/TableCss.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import EditComputerForm from './EditComputerForm';

const ListOfIngredients = () => {

  const [computers, setComputers] = useState<Array<Computer>>([])
  const [open, setOpen] = React.useState(false);


  const GetAllComputers = () => {
    axios.get('https://localhost:7107/api/ComputerStock').then(res => {
      setComputers(res.data)
    })
  }

  const handleOpen = () => {
    setOpen(true);

  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    GetAllComputers()
  }, [])

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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
            <a href='create-computer'><AddCircleIcon /></a>
            Action
          </th>
          <th className='header__item'>Name</th>
          <th className='header__item'>Type</th>
          <th className='header__item'>Brand</th>
          <th className='header__item'>Processor</th>
          <th className='header__item'>Ram</th>
          <th className='header__item'>State</th>
          <th className='header__item'>Comment</th>
        </tr>
        <tr>
          {computers.map((computer) => {
            return (
              <>
                <div className='table-row'>
                  <td className='table-data'>
                    <button className='actions' onClick={handleOpen}>
                      <EditIcon />
                    </button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="parent-modal-title"
                      aria-describedby="parent-modal-description"
                    >
                      <Box sx={{ ...modalStyle, width: 600, height: 500 }}>
                        <h1 style={{position:'relative', left:'30%'}}>Edit {computer.name}</h1>
                        <EditComputerForm
                          id={computer.id}
                          name={computer.name}
                          state={computer.state}
                          brand={computer.brand}
                          type={computer.type}
                          processor={computer.processor}
                          ram={computer.ram}
                          comment={computer.comment}
                        />
                      </Box>
                    </Modal>
                    <button className='actions' onClick={() => {
                      axios.delete('https://localhost:7107/api/ComputerStock/ ' + computer.id).then(() => {
                        GetAllComputers()
                      })
                    }}><DeleteIcon /></button>
                  </td>
                  <td className='table-data'>{computer.name}</td>
                  <td className='table-data'>{computer.type?.type}</td>
                  <td className='table-data'> {computer.brand}</td>
                  <td className='table-data'>{computer.processor?.name}</td>
                  <td className='table-data'>{computer.ram}</td>
                  <td className='table-data'>{computer.state?.state}</td>
                  <td className='table-data'>{computer.comment}</td>
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
