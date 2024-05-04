import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { SchedulerComponent } from './Components/scheduler/scheduler.component';
import { TrainerComponent } from './Components/trainer/trainer.component';
import { NavComponent } from './Components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, SchedulerComponent, TrainerComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
