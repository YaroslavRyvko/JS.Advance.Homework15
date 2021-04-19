import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent, children: [
      { path: 'cenzor', component: CenzorComponent },
      { path: 'userslist', component: UserslistComponent },
      { path: 'tasklist', component: TasklistComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
