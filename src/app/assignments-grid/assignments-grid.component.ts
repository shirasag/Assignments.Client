import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

import { Assignment } from '../assignment';
import { Assignments } from '../mock-assignments';

@Component({
  selector: 'app-assignments-grid',
  templateUrl: './assignments-grid.component.html',
  styleUrls: ['./assignments-grid.component.css']
})
export class AssignmentsGridComponent implements OnInit {

  assignments: Assignment[] = Assignments;
  cols: any[] = [];
  selectedAssignments: Assignment[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'ID' , type:'Label'},
      { field: 'type', header: 'Type', type: 'Label' },
      { field: 'name', header: 'Name', type: 'Label' },
      { field: 'desc', header: 'Description', type: 'Label' },
      { field: 'startDate', header: 'Start At', type: 'Label' },
      { field: 'endDate', header: 'End At', type: 'Label' },
      { field: 'isRepeated', header: 'Repeatedly', type: 'Label' },
      { field: 'isEnded', header: 'End', type: 'Checkbox' },
      { field: 'isArchived', header: 'Archived', type: 'Label' },
      { field: 'status', header: 'Status', type: 'Label' },
      { field: 'delete', type: 'Button' },
      { field: 'archive', type: 'Button' },
    ];
  }

  handleClick() {
    //execute action
  }
}
