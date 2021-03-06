import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
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
    return this.http.delete(Assignment_API + '/' + id).pipe(resp => { return resp; });
   
  }

  archive(id: number) {
    return this.http.put<any>(Assignment_API + '/Archive/' + id, {}).pipe(resp => { return resp; });
  }

  end(id: number) {   
    return this.http.put<any>(Assignment_API + '/End/' + id, {}).pipe(resp => { return resp; });
  }

  submitForm(assignment: Assignment) {
    const headers = { 'content-type': 'application/json' }
    const body = { type: Number(assignment.type), name: assignment.name, desc: assignment.desc, startDate: assignment.startDate, endDate: assignment.endDate ? assignment.endDate : undefined, isRepeated: Boolean(assignment.isRepeated) };   
    return this.http.post<Assignment>(Assignment_API, body, { 'headers': headers } ).pipe(resp => { return resp; });
  }
}
