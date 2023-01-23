import { Grid, GridColumn as Column  } from '@progress/kendo-react-grid';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Computer, FetchGetAllComputers } from './ComputerQuerys'


const ListOfIngredients = () => {

  const [computers, setComputers] = useState<Array<Computer>>([])

  const [isDisabled, setDisabled] = useState(true)

  const [arrData, setArrData] = useState<number[]>([])

  console.log(computers)

  useEffect(() => {
    FetchGetAllComputers(computers)
  }, [])

console.log(computers)
  return (<>
    <Grid
    data={computers}
    >
      <Column field='id' title='Id' width={100} />
      <Column field='name' title='Id' width={100} />
      <Column field='type.type' title='Type' width={100} />
      <Column field='brand' title='Brand' width={100} />
      <Column field='processor.name' title='Processor' width={100} />
      <Column field='ram' title='Ram' width={100} />
      <Column field='state.state' title='State' width={100} />
      <Column field='comment' title='Comment' width={100} />
    </Grid>
  </>
  );
}

export default ListOfIngredients
