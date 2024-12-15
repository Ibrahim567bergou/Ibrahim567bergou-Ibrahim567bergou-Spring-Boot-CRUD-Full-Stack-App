import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit{

  id: number=0;
  employee:Employee=new Employee();
  constructor(private employeeservice:EmployeeService,
    private router: Router,
    private activerouter:ActivatedRoute){}

  ngOnInit(): void {
    
    this.id = this.activerouter.snapshot.params['id'];

    this.employeeservice.getemployee(this.id).subscribe(Data =>{
      this.employee=Data;
    });
  }

  goToEmployeeList(){
    this.router.navigate(["/employees"]);
  }

  onupdate(){
    if 
      (window.confirm('Êtes-vous sûr de vouloir supprimer cet employé ?')) {
        this.employeeservice.updateemployee(this.id,this.employee).subscribe(data =>{
        this.goToEmployeeList();
      });
    }
    else{
      console.log('Suppression annulée');
    }
  }


}