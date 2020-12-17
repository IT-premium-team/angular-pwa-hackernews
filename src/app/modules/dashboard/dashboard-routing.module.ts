import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AskComponent } from './pages/ask/ask.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { NewPostsComponent } from './pages/new-posts/new-posts.component';
import { ShowComponent } from './pages/show/show.component';
import { TrendingComponent } from './pages/trending/trending.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'ask', component: AskComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'trending', component: TrendingComponent },
      { path: 'new-posts', component: NewPostsComponent },
      { path: 'show', component: ShowComponent },
      { path: '**', redirectTo: '/not-found' },
    ]
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }