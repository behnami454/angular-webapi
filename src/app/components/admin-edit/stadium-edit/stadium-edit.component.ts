import { Component, OnInit } from '@angular/core';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium-edit',
  templateUrl: './stadium-edit.component.html',
  styleUrls: ['./stadium-edit.component.scss']
})
export class StadiumEditComponent implements OnInit {

  StadiumList : any=[];
  stadium:any;

  constructor(public stadiumService: StadiumService) { }

  ngOnInit(): void {
    this.getAllStadium();
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
    this.stadiumService.deleteStadium(item.StadiumId).subscribe(data=>{
      this.StadiumList=data;
    })
  }
  }

  getAllStadium(){
  this.stadiumService.getAllStadium().subscribe(data=>{
    this.StadiumList=data;
  })
}

}
