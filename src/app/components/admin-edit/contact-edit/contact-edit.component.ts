import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  ContactList : any=[];
  contact:any;

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
    this.contactService.deleteContact(item.ContactId).subscribe(data=>{
      this.ContactList=data;
    })
  }
  }

  getAllContacts(){
  this.contactService.getAlContact().subscribe(data=>{
    this.ContactList=data;
  })
}

}
