import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, ProjectsComponent } from './pages';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {animation: 'Home'}},
  {path: 'projects', component: ProjectsComponent, data: {animation: 'Projects'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
