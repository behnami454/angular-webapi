import { Component, OnInit } from '@angular/core';
import { LegendsService } from 'src/app/services/legends.service';

@Component({
  selector: 'app-legends-edit',
  templateUrl: './legends-edit.component.html',
  styleUrls: ['./legends-edit.component.scss']
})
export class LegendsEditComponent implements OnInit {

  LegendsList : any=[];
  legends:any;

  constructor(public legendsService: LegendsService) { }

  ngOnInit(): void {
    this.getAllLegends();
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
    this.legendsService.deleteLegends(item.LegendsId).subscribe(data=>{
      this.LegendsList=data;
    })
  }
  }

  getAllLegends(){
  this.legendsService.getAllLegends().subscribe(data=>{
    this.LegendsList=data;
  })
}

}
