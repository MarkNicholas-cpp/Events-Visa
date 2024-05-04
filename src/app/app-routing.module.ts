import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerComponent } from './Components/scheduler/scheduler.component';
import { TrainerComponent } from './Components/trainer/trainer.component';

const routes: Routes = [
  { path: '', redirectTo: 'trainer', pathMatch: 'full' },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'trainer', component: TrainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
