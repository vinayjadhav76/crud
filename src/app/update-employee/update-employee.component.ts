import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

login = new FormGroup({
  username : new FormControl(''),
  password : new FormControl('')
})

  constructor() { }

  ngOnInit(): void {  }

  loginForm(){
    console.warn(this.login.value);
    alert(this.login.value.username + ',' + this.login.value.password)
  }

}
