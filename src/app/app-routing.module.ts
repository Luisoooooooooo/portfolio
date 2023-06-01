import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { WorkComponent } from './work/work.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Home", redirectTo: "/" },
  { path: "Work", component: WorkComponent },
  { path: "Info", component: InfoComponent },
  { path: 'Project-page', component: ProjectPageComponent },
  { path: ':name', component: ProjectDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
