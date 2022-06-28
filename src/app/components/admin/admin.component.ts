import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // loading = this.loader.loading;

  constructor(public adminService: AdminService,public loader: LoadingService) { }

  ngOnInit(): void {
  }

}
