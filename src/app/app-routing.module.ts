import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { Comp1Component } from './lazy/comp1/comp1.component';
import { loadavg } from 'os';
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  { path:'' , component:EmployeeRegistrationComponent },
  { path:'emp_list' , component:EmployeeListComponent},
  { path:'emp_update' , component:UpdateEmployeeComponent},
  { path:'lazy' , 
  loadChildren:() =>import('./lazy/lazy.module').then (m => m.LazyModule) 
},
{
  path:'order' ,
  loadChildren:() =>import('./order/order.module').then (m => m.OrderModule)    
},
{ path:'**' , component:NoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
