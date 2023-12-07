import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {environment} from "../environments/environments";
import { TableComponent } from './table/table.component';
import {initializeApp} from "firebase/app";
import {provideFirebaseApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";

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
