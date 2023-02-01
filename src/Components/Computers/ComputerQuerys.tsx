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

export interface User{
 id: number,
 name: string
}
export interface Borrow {
 id: number,
 fromDate: Date, 
 toDate: Date
 user: User | null, 
 computer: Computer | null
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


