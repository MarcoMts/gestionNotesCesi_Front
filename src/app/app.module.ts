import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { OptionsComponent } from './options/options.component';
import { RouterModule, Routes} from '@angular/router';
import {NoteService} from './note.service';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ConsultationPiloteComponent } from './consultation-pilote/consultation-pilote.component';
import { ConsultationIntervenantComponent } from './consultation-intervenant/consultation-intervenant.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsultationComponent,
    OptionsComponent,
    LoginComponent,
    HeaderComponent,
    ConsultationPiloteComponent,
    ConsultationIntervenantComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      
      {path:'consultation/:idEleve',component:ConsultationComponent},
      {path:'consultationPilote',component:ConsultationPiloteComponent},
      {path:'consultationIntervenant/:idIntervenant',component:ConsultationIntervenantComponent},      
      {path:'login',component:LoginComponent}
      
    ])
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
