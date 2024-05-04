import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/Interfaces/event';
import { EventService } from 'src/app/Services/Event/event.service'
@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  constructor(private EventService: EventService) {

  }
  ngOnInit(): void {
    this.getEvents();
  }
  events: Event[] = []
  getEvents() {
    this.EventService.getEvents().subscribe({
      next: (data: Event[]) => {
        this.events = data
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
  deleteEvent(id: String | undefined) {
    if (id) {
      this.EventService.deleteEvent(id).subscribe({
        next: (data) => {
          console.log(data)
          this.getEvents()
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  }
}
