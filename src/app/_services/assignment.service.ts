import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Assignment } from '../assignment';

const Assignment_API = 'https://localhost:44332/api/Assignments';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(Assignment_API).pipe(
      map((result: any[]) => {
        let assignments: Assignment[] = []
        result.forEach(item => assignments.push(item))
        return assignments;
      })
    )
  }

  delete(id: number) {
    console.log("id: " + id);
    return this.http.delete(Assignment_API + '/' + id).pipe(resp => { return resp; });
   
  }

  archive(id: number) {

  }

  end(id: number) {
    //const body = { isEnded : true};
    //this.http.put<Assignment>(Assignment_API +'/EndAssignment/'+id,body)
  }
}
