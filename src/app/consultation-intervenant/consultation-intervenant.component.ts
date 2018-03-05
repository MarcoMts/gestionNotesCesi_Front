import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';
import { Note } from '../Model/note.model';
import {Module} from '../Model/module.model';

@Component({
  selector: 'app-consultation-intervenant',
  templateUrl: './consultation-intervenant.component.html',
  styleUrls: ['./consultation-intervenant.component.css']
})
export class ConsultationIntervenantComponent implements OnInit {

  constructor(private filieresService : NoteService, private promotionsService : NoteService, private modulesService : NoteService, private etudiantsNotesService : NoteService) { }
  
  selectedFiliere = null; 
  selectedPromotion = null; 
  selectedModule = null; 
  selectedEtudiantsNotes = null; 
  isSaisi=false;
  filieres = [];    
  promotions = [];
  modules = [];
  etudiantsNotes = [];
  notes: Array<Note> = [];
  
  
  ngOnInit() {
    this.filieresService.getFilieres().subscribe(responseFilieres => this.filieres = responseFilieres);    
    this.updateFilieres();    
  }
  updateFilieres() {
    this.selectedFiliere=<HTMLSelectElement>document.getElementById("filiere");    
    this.promotionsService.getPromotions(this.selectedFiliere.value).subscribe(responsePromotions => this.promotions = responsePromotions);    
    this.updatePromotions();
  }

  updatePromotions() {
    this.selectedPromotion=<HTMLSelectElement>document.getElementById("promotion");    
    this.modulesService.getModules(this.selectedPromotion.value).subscribe(responseModules => this.modules = responseModules);  
    this.updateModules();    

  }
  updateModules() {
    let reslt : any = [];
    this.selectedModule=<HTMLSelectElement>document.getElementById("module");
    for (let i=0;i<this.modules.length;i++){
      if(this.selectedModule.value == this.modules[i].libelleModule) {
         reslt = this.modules[i]
      }
    }

    this.isSaisi=reslt.isSaisi;   
   // this.etudiantsNotesService.getNotes().subscribe(responseNotes => this.notes = responseNotes);    
    
    this.etudiantsNotesService.getEtudiantsNotes(this.selectedModule.value).subscribe(responseEtudiantsNotes => this.etudiantsNotes = responseEtudiantsNotes); 

  }
  updateNotes() {
    
    this.etudiantsNotesService.createEtudiantsNotes(this.notes);
    }
  createNotes() {
    this.etudiantsNotesService.setEtudiantsNotes(this.notes);
  }
  


}
