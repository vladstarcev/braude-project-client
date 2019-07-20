import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from './projects/projects.component';
import { CoopComponent } from './coop/coop.component';
import { StudentsComponent } from './students/students.component';
import { IdeasComponent } from './ideas/ideas.component';
import { ContactComponent } from './contact/contact.component';

export const pages: any[] = [
    CoopComponent,
    HomeComponent,
    ProjectsComponent,
    StudentsComponent,
    IdeasComponent,
    ContactComponent
];

export * from './coop/coop.component';
export * from './home/home.component';
export * from './projects/projects.component';
export * from './students/students.component';
export * from './ideas/ideas.component';
export * from './contact/contact.component';

