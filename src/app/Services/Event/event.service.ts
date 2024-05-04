import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/Interfaces/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:3000/events')
  }
  addEvent(Event: Event): Observable<Event> {
    return this.http.post<Event>('http://localhost:3000/events', Event);
  }
  deleteEvent(id: String): Observable<Event>{
    return this.http.delete<Event>(`http://localhost:3000/events/${id}`)
  }
}
