import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router"


import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes : Routes = [
  {path:'', redirectTo:'/about', pathMatch:'full'},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
