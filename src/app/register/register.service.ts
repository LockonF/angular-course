import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Contact } from '../contacts/contact.dto';
import 'rxjs/Rx';


const URL = 'http://13.58.169.69/registros/';

@Injectable()
export class RegisterService {

  constructor(private http: Http) {}

  public postForm(data: Contact) {
     let backendFormatData = Contact.toBackendFormat(data);
     return this.http.post(URL, backendFormatData).map((returnData: any) => this.mapData(returnData))

  }

  private mapData(data: any) {
    console.log(data);
    return data
  }

}