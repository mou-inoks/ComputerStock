import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Computer } from './ComputerQuerys'
import '../../css/TableCss.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EditComputerForm from './EditComputerForm';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DetailsComputer from './DetailsComputer';

export type ListComputersProps = {
  isOnlyFreeChecked: boolean
}
const ListComputers = (props: ListComputersProps) => {

  const [computers, setComputers] = useState<Array<Computer>>([])

  const Listfiltered = computers.filter((e) => {
    if (props.isOnlyFreeChecked) {
      if (e.state?.state == "In Stock") {
        return e
      }
      else return null
    }
    else return computers
  })

  const [open, setOpen] = useState(false);

  const [detailsOpen, setDetailsOpen] = useState(false);

  const [tempComputer, setTempComputer] = useState<Computer>();

  const GetAllComputers = () => {
    axios.get('https://localhost:7107/api/computer-stock').then(res => {
      setComputers(res.data)
      console.log(res.data)
    })
  }

  const handleOpen = (v: Computer) => {
    setTempComputer(v)
    setOpen(true);

  };

  const handleOpenDetails = (v: Computer) => {
    setTempComputer(v)
    setDetailsOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
    setDetailsOpen(false);
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
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };


  return (
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
          {Listfiltered.map((computer) => {
            return (
              <>
                <div className='table-row'>
                  <td className='table-data'>
                    <button className='actions' onClick={() => handleOpen(computer)}>
                      <EditIcon />
                    </button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="parent-modal-title"
                      aria-describedby="parent-modal-description"
                    >
                      <Box sx={{ ...modalStyle, width: 600, height: 500, backgroundColor: '#4e4e4e', color: 'white' }}>
                        <h1 style={{ position: 'relative', left: '30%' }}>Edit {tempComputer?.name}</h1>
                        <EditComputerForm computer={tempComputer!} />
                      </Box>
                    </Modal>
                    <button className='actions' onClick={() => {
                      axios.delete('https://localhost:7107/api/computer-stock/ ' + computer.id).then(() => {
                        GetAllComputers()
                      })
                    }}><DeleteIcon /></button>
                    <button className='actions' onClick={() => handleOpenDetails(computer)}>
                      <RemoveRedEyeIcon />
                    </button>
                    <Modal
                      open={detailsOpen}
                      onClose={handleClose}
                      aria-labelledby="parent-modal-title"
                      aria-describedby="parent-modal-description"
                    >
                      <Box sx={{ ...modalStyle, width: 600, height: 500, backgroundColor: '#4e4e4e', color: 'white' }}>
                        <h1 style={{ position: 'relative', left: '30%' }}>Details {tempComputer?.name}</h1>
                        <DetailsComputer computer={tempComputer!} />
                      </Box>
                    </Modal>
                  </td>
                  <td className='table-data'>{computer.name}</td>
                  <td className='table-data'>{computer.type?.type}</td>
                  <td className='table-data'> {computer.brand}</td>
                  <td className='table-data'>{computer.processor?.niveau}</td>
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

  );
}

export default ListComputers
