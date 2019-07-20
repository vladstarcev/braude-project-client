import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, ProjectsComponent, CoopComponent, StudentsComponent, IdeasComponent, ContactComponent } from './pages';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {animation: 1}},
  {path: 'projects', component: ProjectsComponent, data: {animation: 2}},
  {path: 'coop', component: CoopComponent, data: {animation: 3}},
  {path: 'students', component: StudentsComponent, data: {animation: 4}},
  {path: 'ideas', component: IdeasComponent, data: {animation: 5}},
  {path: 'contact', component: ContactComponent, data: {animation: 6}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
