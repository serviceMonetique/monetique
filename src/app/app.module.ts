import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
// @ts-ignore
import {provideFirebaseApp,initializeApp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// @ts-ignore
import {getFirestore, provideFirestore} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import {environment} from "../environments/environments";
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideFirestore(()=>getFirestore()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
