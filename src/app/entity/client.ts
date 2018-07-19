import { History } from './history';

export class Client{
    id: number;
    firstName: string;
    lastName: string;
    patronymic: string;
    passportID: number;
    dob: number;

    constructor(
        id: number,
    firstName: string,
    lastName: string,
    patronymic: string,
    passportID: number,
    dob: number
    ){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic= patronymic;
        this.passportID = passportID;
        this.dob =dob;
    }
}