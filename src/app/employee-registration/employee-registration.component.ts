import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {
addEmployee = new FormGroup({
  name: new FormControl(['']),
  mail: new FormControl(['']),
  dob: new FormControl(['']),
  tel: new FormControl(['']),
  address: new FormControl(['']),
  designation: new FormControl([''])
})

  constructor( private empservice:EmployeeService ) {}

  ngOnInit(): void {}

  addEmpForm(){
    console.warn(this.addEmployee.value);
    this.empservice.addEmployee(this.addEmployee.value).subscribe((res)=>{
this.addEmployee.reset()
    })
  }

}
