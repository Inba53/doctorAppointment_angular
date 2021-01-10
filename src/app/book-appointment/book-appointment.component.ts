import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  displayedColumns = ['sn','slotDate', 'slotSession','startTime','endTime' ,'appointment','pateientName','pateientNumber'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private app_service : AppServiceService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.app_service.getAllSlots().subscribe(data => {
      if (data.statusCode == 200) {
        this.dataSource = new MatTableDataSource(data.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.data = data.data;
      } else {

      }
      err => {
        console.log(err)
      }
    });
  }
}
