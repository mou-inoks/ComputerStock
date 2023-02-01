import axios from 'axios';


export interface ComputerTypeDto {
 id: number, 
 type: string
}

export interface ProcessorDto{
 id: number, 
 name: string, 
 niveau: string, 
 vitesse: string
}
export interface StateDto{
 id: number,  
 state: string
}

export interface UserDto{
 id: number,
 name: string
}
export interface BorrowDto {
 id: number,
 fromDate: Date, 
 toDate: Date
 user: UserDto | null, 
 computer: ComputerDto | null
}

export interface ComputerDto {
 id: number,
 name: string, 
 type: ComputerTypeDto | null, 
 brand: string, 
 processor: ProcessorDto | null, 
 ram: number, 
 state: StateDto | null, 
 comment: string
}


