import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IThought } from '../../thought.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) { }

  list(): Observable<IThought[]> {
    return this.http.get<IThought[]>(this.API);
  }

  create(thought: IThought): Observable<IThought>{
    return this.http.post<IThought>(this.API, thought);
  }

  update(thought: IThought): Observable<IThought>{
    const url =`${this.API}/${thought.id}`;
    return this.http.put<IThought>(url, thought);
  }

  delete(id: number) : Observable<IThought>{
    const url = `${this.API}/${id}`;
    return this.http.delete<IThought>(url);
  }

  getById(id: number): Observable<IThought> {
    const url = `${this.API}/${id}`;
    return this.http.get<IThought>(url);
  }
}
