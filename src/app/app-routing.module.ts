import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SlotAllocationComponent } from './slot-allocation/slot-allocation.component';


const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'slot-allocation',
    component: SlotAllocationComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'book-appointment',
    component: BookAppointmentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
