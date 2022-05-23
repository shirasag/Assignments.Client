import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Assignment, status, types } from '../assignment';
import { AssignmentService } from '../_services/assignment.service';

@Component({
  selector: 'app-assignments-grid',
  templateUrl: './assignments-grid.component.html',
  styleUrls: ['./assignments-grid.component.css']
})
export class AssignmentsGridComponent implements OnInit {

  assignments: Assignment[] = [];
  cols: any[] = [];
  selectedAssignments: Assignment[] = [];
  status = status;
  types = types;
  constructor(public assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'ID' , type:'Label'},
      { field: 'type', header: 'Type', type: 'Enum' },
      { field: 'name', header: 'Name', type: 'Label' },
      { field: 'desc', header: 'Description', type: 'Label' },
      { field: 'startDate', header: 'Start At', type: 'Label' },
      { field: 'endDate', header: 'End At', type: 'Label' },
      { field: 'isRepeated', header: 'Repeatedly', type: 'Label' },
      { field: 'isEnded', header: 'End', type: 'Checkbox' },
      { field: 'isArchived', header: 'Archived', type: 'Label' },
      { field: 'status', header: 'Status', type: 'Enum' },
      { field: 'delete', type: 'Button' },
      { field: 'archive', type: 'Button' },
    ];
    this.getAll();
  }

  getAll() {
    this.assignmentService.getAll().subscribe((resp: any) => {
      this.assignments = resp;
      console.log(this.assignments) ;
    });
  }

  delete(id: number) {
    this.assignmentService.delete(id).subscribe((resp: any) => this.assignments = this.assignments.filter(x => x.id !== id));
  }

  archive(id: number) {
    this.assignmentService.archive(id).subscribe((resp: any) => {
      var ass = this.assignments.find(x => x.id === id)
      if (ass != undefined) {
        ass.isArchived = true;
      }

    });
  }

  end(event: any, id: number) {    
    if (event.checked) {
      this.assignmentService.end(id).subscribe((resp: any) => {
        var ass = this.assignments.find(x => x.id === id)        
        if (ass != undefined) {
          ass.status = 1;
        }
        
      });
    }
  }
  
}
