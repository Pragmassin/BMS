import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';

import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    VendormasterComponent,
    CreateComponent,
    CyclemasterComponent,
    BillScheduleComponent,
    ServiceComponent,
    ReminderComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
