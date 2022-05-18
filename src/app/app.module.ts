import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AssignmentsGridComponent } from './assignments-grid/assignments-grid.component';
import { NewAssignmentFormComponent } from './new-assignment-form/new-assignment-form.component';
import { AppRoutingModule } from './app-routing.module';

import { AssignmentInterceptor } from './_helpers/assignment.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsGridComponent,
    NewAssignmentFormComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    TableModule,
    RatingModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    AppRoutingModule
  ],
  providers: [AssignmentInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
