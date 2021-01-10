import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SlotAllocationComponent } from './slot-allocation/slot-allocation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SlotAllocationComponent,
    BookAppointmentComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    NgxMaterialTimepickerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [NgxSpinnerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
