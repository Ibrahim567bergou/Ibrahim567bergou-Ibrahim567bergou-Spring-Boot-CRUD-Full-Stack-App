import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detaile',
  templateUrl: './employee-detaile.component.html',
  styleUrls: ['./employee-detaile.component.css']
})
export class EmployeeDetaileComponent  implements OnInit{


  id?:number;
  employee:Employee=new Employee();

  constructor(private activaterout:ActivatedRoute,private employeeservice:EmployeeService){}


  ngOnInit(): void {
    this.id=this.activaterout.snapshot.params['id'];

    this.employeeservice.getemployee(this.id!).subscribe(Data =>{
        this.employee=Data;
    },error => console.log(error));
      
  }

}
