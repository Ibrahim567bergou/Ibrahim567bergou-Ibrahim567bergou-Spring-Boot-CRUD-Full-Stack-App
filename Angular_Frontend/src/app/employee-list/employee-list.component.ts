import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  implements OnInit{

  employees?: Employee[]; 


  constructor(private employeeservice:EmployeeService,private router:Router){}

  ngOnInit(): void {
  this.gitemployee();
    
  }

  private gitemployee() {
    this.employeeservice.getEmployeeList().subscribe(
      data => {
        this.employees = data;
      }
    );
  }

  updateemployee(id?:number){
    this.router.navigate(["employee_update",id]);
  }

  supprimeremployee(id?:number){
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet employé ?')) {
      this.employeeservice.deleteemployee(id!).subscribe(Data =>{
        this.gitemployee();
      });
    }
    else{
      console.log('Suppression annulée');
    }
  }

  detailemployee(id?:number){
    this.router.navigate(["employee_detaile",id]);


  }

}
