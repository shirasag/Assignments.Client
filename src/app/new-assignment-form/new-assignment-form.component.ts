import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Assignment, types, repeatition } from '../assignment';
import { AssignmentService } from '../_services/assignment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-assignment-form',
  templateUrl: './new-assignment-form.component.html',
  styleUrls: ['./new-assignment-form.component.css']
})
export class NewAssignmentFormComponent implements OnInit {

  types = types;
  repeatition = repeatition;
  assignment: Assignment | undefined ;

  newAssignmentForm = new FormGroup({
    type: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    desc: new FormControl(''),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl(''),
    isRepeated: new FormControl('', Validators.required)
  });



  constructor(public assignmentService: AssignmentService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.types);
  } 

  onSubmit(value: string) {

    this.assignment = new Assignment(this.newAssignmentForm.value);
    this.assignment.type = this.newAssignmentForm.controls['type'].value;
    this.assignment.isRepeated = this.newAssignmentForm.controls['isRepeated'].value; 
  
    this.assignmentService.submitForm(this.assignment).subscribe(() => this.router.navigate(['/assignmentsGrid']));
  }
}
