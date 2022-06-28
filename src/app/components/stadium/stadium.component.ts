import { Component, OnInit } from '@angular/core';
import { StadiumService } from 'src/app/services/stadium.service';
import { LoadingService } from 'src/app/services/loading.service';
import AOS from "aos";

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.scss']
})
export class StadiumComponent implements OnInit {

  loading$ = this.loader.loading$;
  StadiumList : any=[];

  constructor(public stadiumService : StadiumService,public loader: LoadingService) { }

  ngOnInit(): void {
    this.getAllStadiums();
    AOS.init();
  }

  getAllStadiums(){
    this.stadiumService.getAllStadium().subscribe(data=>{
      this.StadiumList=data;
    })
  }

}
