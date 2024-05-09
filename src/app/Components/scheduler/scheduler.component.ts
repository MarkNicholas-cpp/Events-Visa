import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/Interfaces/event';
import { EventService } from 'src/app/Services/Event/event.service';
@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  eventForm!: FormGroup;
  eventData !: any;
  constructor(private formBuilder: FormBuilder, private EventService: EventService, private router: Router, private snapeShot: ActivatedRoute) { }
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
    this.eventData = this.snapeShot.snapshot.paramMap;
    if (this.eventData) {
      console.log(this.eventData)
      this.eventForm.controls['eventName'].setValue(this.eventData.get('eventName'))
      this.eventForm.controls['eventStartData'].setValue(this.eventData.get('eventStartData'))
      this.eventForm.controls['eventEndData'].setValue(this.eventData.get('eventEndData'))
      this.eventForm.controls['email'].setValue(this.eventData.get('email'))
      this.eventForm.controls['mobile'].setValue(this.eventData.get('mobile'))
      this.eventForm.controls['venue'].setValue(this.eventData.get('venue'))
      this.eventForm.controls['location'].setValue(this.eventData.get('location'))
      this.eventForm.controls['personName'].setValue(this.eventData.get('personName'))
    }

  }
  onSubmit() {
    if (this.eventData.get('newRecord')) {
      this.EventService.addEvent(this.eventForm.value).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/trainer'])
        },
        error: (error) => {
          console.log(error)
        }
      })
    }else{
      this.EventService.updateEvent(this.eventForm.value,this.eventData.get('id')).subscribe({
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

}
