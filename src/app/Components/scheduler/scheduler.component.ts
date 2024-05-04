import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/Services/Event/event.service';
@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {
  eventForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private EventService: EventService,private router:Router) { }
  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventStartData: ['', Validators.required],
      eventEndData: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      venue: ['', Validators.required],
      location: ['', Validators.required],
      personName: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.eventForm.value);
    this.EventService.addEvent(this.eventForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/trainer'])
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
