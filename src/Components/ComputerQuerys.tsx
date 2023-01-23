import axios from 'axios';


export interface ComputerType {
 id: number, 
 type: string
}

export interface Processor{
 id: number, 
 name: string, 
 niveau: string, 
 vitesse: string
}
export interface State{
 id: number, 
 state: string
}


export interface Computer {
 id: number, 
 name: string, 
 type: ComputerType | null, 
 brand: string, 
 processor: Processor | null, 
 ram: number, 
 state: State | null, 
 comment: string
}



export const FetchGetAllComputers = async (table: Array<Computer>) => {
 const data = await axios.get<Array<Computer>>('https://localhost:7107/api/ComputerStock').then(res => {
  console.log(res.data)
  table = res.data
 })

 return table;
}

