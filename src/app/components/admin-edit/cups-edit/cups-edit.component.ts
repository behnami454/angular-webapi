import { Component, OnInit } from '@angular/core';
import { CupsService } from 'src/app/services/cups.service';

@Component({
  selector: 'app-cups-edit',
  templateUrl: './cups-edit.component.html',
  styleUrls: ['./cups-edit.component.scss']
})
export class CupsEditComponent implements OnInit {

  CupsList : any=[];
  cups:any;

  constructor(public cupsService: CupsService) { }

  ngOnInit(): void {
    this.getAllCups();
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
    this.cupsService.deleteCups(item.CupsId).subscribe(data=>{
      this.CupsList=data;
    })
  }
  }

  getAllCups(){
  this.cupsService.getAllCups().subscribe(data=>{
    this.CupsList=data;
  })
}

}
