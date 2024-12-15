import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeDetaileComponent } from './employee-detaile/employee-detaile.component';

const routes: Routes = [
  {path:'', redirectTo:"employees", pathMatch:"full"},
  {path:"employees", component:EmployeeListComponent},
  {path:"employee_create", component: EmployeeCreateComponent},
  {path:"employee_update/:id", component: EmployeeUpdateComponent},
  {path:"employee_detaile/:id", component: EmployeeDetaileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
