import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService  {

  private urlBase= "http://localhost:8080/api/v1";


  constructor(private httpclient:HttpClient){}

  getEmployeeList():Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(`${this.urlBase}/employees`);
  }

  createEmployee(employee:Employee):Observable<Object>{
    return this.httpclient.post<Employee>(`${this.urlBase}/save`,employee);
  }

  getemployee(id:number):Observable<Employee>{
    return this.httpclient.get<Employee>(`${this.urlBase}/getemployee/${id}`);
  }

  updateemployee(id:number,employee:Employee):Observable<Object>{
    return this.httpclient.put<Employee>(`${this.urlBase}/update/${id}`,employee);
  }

  deleteemployee(id:number):Observable<void>{
    return this.httpclient.delete<void>(`${this.urlBase}/delete/${id}`);
  }
}
