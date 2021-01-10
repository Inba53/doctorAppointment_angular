import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private BaseUrl = "http://localhost:4000/api/appointment/";
  
  constructor(private http: HttpClient) { }


  saveSlot(data){
    return this.http.post<any>(this.BaseUrl + 'saveSlot', data);
  }

  searchSlot(data){
    return this.http.post<any>(this.BaseUrl + 'searchSlot', data);
  }

  bookAppointment(data){
    return this.http.post<any>(this.BaseUrl + 'bookAppointment', data);
  }

  getAllSlots(){
    return this.http.get<any>(this.BaseUrl + 'getAllAppointments');
  }

}
