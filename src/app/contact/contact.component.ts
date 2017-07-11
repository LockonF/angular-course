import { Component, Input, OnInit } from '@angular/core';
import { Contact } from "./contact.dto";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  @Input()
  public contact: Contact;

  public ngOnInit() {
  }

}
