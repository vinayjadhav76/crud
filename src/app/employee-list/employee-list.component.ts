import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  empList: any = []
  file = null
  shortLink: string = ""
  loading:boolean= false

  constructor(private empservice: EmployeeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.empservice.getEmployee().subscribe((res) => {
      this.empList = res;
    })
  }
     // On file Select
     onChange(event:any) {
      this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
      this.loading = !this.loading;
      console.log(this.file);
      this.empservice.upload(this.file).subscribe(
          (event: any) => {
              if (typeof (event) === 'object') {

                  // Short link via api response
                  this.shortLink = event.link;

                  this.loading = false; // Flag variable 
              }
          }
      );
  }
}
