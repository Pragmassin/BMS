import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule} from '@angular/material';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VendormasterComponent } from './vendormaster/vendormaster.component';
import { CreateComponent } from './bill/create/create.component';
import { CyclemasterComponent } from './bill/cyclemaster/cyclemaster.component';
import { BillScheduleComponent } from './bill/bill-schedule/bill-schedule.component';
import { ServiceComponent } from './service/service-master/service-master.component';
import { ReminderComponent } from './service/reminder-config/reminder-config.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    VendormasterComponent,
    CreateComponent,
    CyclemasterComponent,
    BillScheduleComponent,
    ServiceComponent,
    ReminderComponent,
    HomeComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
