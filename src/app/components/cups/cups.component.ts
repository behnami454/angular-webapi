import { Component, OnInit } from '@angular/core';
import { CupsService } from 'src/app/services/cups.service';
import { LoadingService } from 'src/app/services/loading.service';
import AOS from "aos";

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.scss']
})
export class CupsComponent implements OnInit {

  loading$ = this.loader.loading$;
  CupsList : any=[];

  constructor(public cupsService: CupsService,public loader: LoadingService) { }

  ngOnInit(): void {
    this.getAllCups();
    AOS.init();
  }

  getAllCups(){
    this.cupsService.getAllCups().subscribe(data=>{
      this.CupsList=data;
    })
  }

}
