import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAssignmentFormComponent } from './new-assignment-form/new-assignment-form.component';
import { AssignmentsGridComponent } from './assignments-grid/assignments-grid.component';

const routes: Routes = [
  { path: '', redirectTo: '/assignmentsGrid', pathMatch: 'full' },
  { path: 'assignmentsGrid', component: AssignmentsGridComponent },
  { path: 'newAssignment', component: NewAssignmentFormComponent },
 
  
];

@NgModule({
  declarations: [],
  imports: [   
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
