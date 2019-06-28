import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VendormasterComponent } from './vendormaster/vendormaster.component';
import { CreateComponent } from './bill/create/create.component';
import { CyclemasterComponent } from './bill/cyclemaster/cyclemaster.component';
import { BillScheduleComponent } from './bill/bill-schedule/bill-schedule.component';
import { ServiceComponent } from './service/service-master/service-master.component';
import { ReminderComponent } from './service/reminder-config/reminder-config.component';


const AppRoutes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'vendor', component: VendormasterComponent},
  {path: 'create', component: CreateComponent},
  {path: 'cycle', component: CyclemasterComponent},
  {path: 'schedule', component: BillScheduleComponent},
  {path: 'serv', component: ServiceComponent },
  {path: 'reminder', component: ReminderComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
