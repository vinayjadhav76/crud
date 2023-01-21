import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empl = " http://localhost:3000/Employee"
  baseApiUrl = "https://file.io"
  constructor(private http: HttpClient) { }

  addEmployee(data: any) {
    return this.http.post(this.empl, data)
  }

  getEmployee() {
    return this.http.get(this.empl)
  }

  upload(file:any):Observable<any> {
  
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData)
}
}
