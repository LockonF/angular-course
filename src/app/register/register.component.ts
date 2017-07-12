import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup ;
  constructor() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      phone: new FormControl()
    })
  }

  public ngOnInit() {
    // Reactive forms
    this.registerForm.valueChanges.subscribe((value: any) => {
      console.log(value);
    });
  }

}
