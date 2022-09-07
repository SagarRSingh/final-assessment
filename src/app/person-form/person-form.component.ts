import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  personForm!:FormGroup;
  
  constructor(private _formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.personForm = this._formBuilder.group({
      firstName:['', [Validators.required]],
      middleName:[''],
      lastName:['', [Validators.required]],
      department:[''],
      gender:[''],
      dateOfBirth:['', [Validators.required]],
      address:['', [Validators.required]],
      pincode:[, [Validators.required, Validators.min(100000), Validators.max(999999)]],
    })
  }

  submit(){
    console.log(this.personForm.value);
  }

}
