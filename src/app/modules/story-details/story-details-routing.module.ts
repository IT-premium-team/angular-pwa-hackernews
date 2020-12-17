import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryDetailsComponent } from './pages/story-details/story-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: StoryDetailsComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryDetailsRoutingModule { }