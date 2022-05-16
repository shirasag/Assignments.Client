import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-assignment-form',
  templateUrl: './new-assignment-form.component.html',
  styleUrls: ['./new-assignment-form.component.css']
})
export class NewAssignmentFormComponent implements OnInit {

  newAssignmentForm = new FormGroup({
    type: new FormControl(''),
    name: new FormControl(''),
    desc: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    isRepeated: new FormControl('')
  });



  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(value: string) {

    // TODO: Use EventEmitter with form value
    console.warn(this.newAssignmentForm.value);
  }
}
