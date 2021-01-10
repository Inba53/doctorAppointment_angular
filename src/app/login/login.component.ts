import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm', { static: false }) loginForm: NgForm;
  public loginData : any = {}

  constructor(
    private _snackBar: MatSnackBar, private route : Router
  ) { }

  ngOnInit() {
  }

  login() {
    if(this.loginForm.invalid){
      this._snackBar.open('Please fill all the fields!', '', {
        duration: 2000,
        verticalPosition: 'top'

      });
    }else{
      if(this.loginData.userName == 'doctor' && this.loginData.userPassword == 'doctor'){
        var Role = "Doctor"
        localStorage.setItem('role',Role)
        this.route.navigate(['/slot-allocation'])
      }else if(this.loginData.userName == 'patient' && this.loginData.userPassword == 'patient'){
        var Role = "Patient"
        localStorage.setItem('role',Role)
        this.route.navigate(['/slot-allocation'])
      }else{
        this._snackBar.open('Invalid Credentials', '', {
          duration: 2000,
          verticalPosition: 'top'
        });
      }
    }
  }

}
