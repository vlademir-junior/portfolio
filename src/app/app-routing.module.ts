import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
