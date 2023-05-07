export interface IEmployee {
    id: string
    firstName: string  
    lastName: string
    email: string
    departmentId: number
}


export enum PageEnum {
    list,
    add,
}