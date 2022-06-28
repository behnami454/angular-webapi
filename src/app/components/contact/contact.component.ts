import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { LoadingService } from 'src/app/services/loading.service';
import { NgForm } from '@angular/forms';
import AOS from "aos";




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  ContactList : any=[];
  constructor(public contactService: ContactService,public loader: LoadingService) { }

  ngOnInit(): void {
    AOS.init();
  }

  addContactt(val){
    this.contactService.addContact(val).subscribe(data=>{
      this.ContactList=data;
    })
  }
}
