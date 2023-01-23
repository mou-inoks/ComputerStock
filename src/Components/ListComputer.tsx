import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Computer } from './ComputerQuerys'
import '../css/TableCss.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';


const ListOfIngredients = () => {

  const [computers, setComputers] = useState<Array<Computer>>([])

  useEffect(() => {
    axios.get('https://localhost:7107/api/ComputerStock').then(res => {
      setComputers(res.data)
    })
  }, [])
  return (<>
    <table className='table'>
      <tbody>
        <tr className='table-header'>
          <th className='header__item'>Action</th>
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
                    <a href="create-computer"><AddIcon/></a>
                    <a href=""><EditIcon/></a>
                    <a href=""><DeleteIcon/></a>
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
