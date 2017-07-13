import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { ContactComponent } from './contact/contact.component';
=======
import { ContactComponent } from './contacts/contact.component';
import { RegisterModule } from './register/register.module';
import { MdButtonModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import { ContactsModule } from './contacts/contacts.module';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
<<<<<<< Updated upstream
    BrowserModule
=======
    BrowserModule,
    BrowserAnimationsModule,
    RegisterModule,
    MdButtonModule,
    HttpModule,
    AppRoutingModule,
    ContactsModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
