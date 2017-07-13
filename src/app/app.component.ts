import { Component } from '@angular/core';
<<<<<<< Updated upstream
import { Contact } from "./contact/contact.dto";
=======
import { Contact } from './contacts/contact.dto';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact: Contact;
  constructor() {
    this.contact = new Contact();
    this.contact.firstName = 'Daniel';
    this.contact.lastName = 'Franco';
    this.contact.avatarUrl = 'https://www.snecsllc.com/wp-content/uploads/2012/11/Generic-Person-300x300.png';
    this.contact.birthday = new Date('1992/10/18');
  }

  public alertContact(message: string) {
    alert(message);
  }
}
