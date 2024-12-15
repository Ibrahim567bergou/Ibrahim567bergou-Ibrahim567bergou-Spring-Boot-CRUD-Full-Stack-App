import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {


  employee: Employee= new Employee();
  

  constructor(private employeeservice : EmployeeService,
    private router:Router
  ){ }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.saveemployee();
  }
  goToEmployeeList(){
    this.router.navigate(["/employees"]);
  }

  saveemployee() {
    this.employeeservice.createEmployee(this.employee).subscribe(
      data => {
        console.log('Employé créé avec succès', data);  // Vous pouvez afficher la réponse du serveur si nécessaire
        this.goToEmployeeList();  // Rediriger ou mettre à jour l'interface après la création
      },
      error => {
        console.error('Erreur lors de la création de l\'employé', error);  // Gérer les erreurs si elles se produisent
      }
    );
  } 
}
