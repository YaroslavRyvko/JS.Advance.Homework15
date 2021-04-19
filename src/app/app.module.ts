import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorksComponent,
    UserslistComponent,
    TasklistComponent,
    CenzorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
