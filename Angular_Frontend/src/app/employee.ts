export class Employee {

    id?: number;
    firstname?: string;
    lastname?: string;
    email?: string;

    constructor(id?:number,first_name?:string,last_name?:string,email?:string){

        this.id=id;
        this.firstname=first_name;
        this.lastname=last_name;
        this.email=email;

    }
}
