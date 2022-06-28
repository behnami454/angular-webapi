import { Component, OnInit } from '@angular/core';
import { LegendsService } from 'src/app/services/legends.service';
import AOS from "aos";
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.scss']
})
export class LegendsComponent implements OnInit {

  loading$ = this.loader.loading$;
  LegendsList : any=[];

  constructor(public legendsService : LegendsService,public loader: LoadingService) { }

  ngOnInit(): void {
    this.getAllLegends();
    AOS.init();
  }

  getAllLegends(){
    this.legendsService.getAllLegends().subscribe(data=>{
      this.LegendsList=data;
    })
  }
}
