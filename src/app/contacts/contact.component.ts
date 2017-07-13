import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from "./contact.dto";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input()
  public contact: Contact;
  @Output('onContactSelected')
  public selectContact: EventEmitter<string>;

  constructor() {
    this.contact = new Contact();
    this.selectContact = new EventEmitter<string>();
  }


  public ngOnInit() {
  }

  public onContactSelected() {
    this.selectContact.emit('Hola ' +
      this.contact.firstName + ' ' + this.contact.lastName)
  }

}
