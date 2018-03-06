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
    let reslt : any = [];

    this.selectedModule= <HTMLSelectElement>document.getElementById("module");
    for (let i=0;i<this.modules.length;i++){
      if(this.selectedModule.value == this.modules[i].libelleModule) {
         reslt = this.modules[i]
      }
    }

    this.isSaisi=reslt.moduleIsSaisie;   
  }
  updateFilieres() {
    this.selectedFiliere=<HTMLSelectElement>document.getElementById("filiere");    
    this.promotionsService.getPromotions(this.selectedFiliere.value).subscribe(responsePromotions => this.promotions = responsePromotions);    
    this.updatePromotions();
  }

  updatePromotions() {
    this.selectedPromotion=<HTMLSelectElement>document.getElementById("promotion");    
    this.modulesService.getModulesIntervenant(this.selectedPromotion.value).subscribe(responseModules => this.modules = responseModules);  
    this.updateModules(); 


  }
  updateModules() {
    let reslt : any = [];
    this.selectedModule= <HTMLSelectElement>document.getElementById("module");
    for (let i=0;i<this.modules.length;i++){
      if(this.selectedModule.value == this.modules[i].libelleModule) {
         reslt = this.modules[i]
      }
    }

    this.isSaisi=reslt.moduleIsSaisie;   
   // this.etudiantsNotesService.getNotes().subscribe(responseNotes => this.notes = responseNotes);    
    
    this.etudiantsNotesService.getEtudiantsNotes(this.selectedModule.value).subscribe(responseEtudiantsNotes => this.etudiantsNotes = responseEtudiantsNotes); 

  }
  updateNotes() {
    
    this.etudiantsNotesService.setEtudiantsNotes(this.selectedModule.value,this.etudiantsNotes);
    console.log("test update");
    for (let i=0;i<this.etudiantsNotes.length;i++){
      //this.etudiantsNotes[i].noteValeur = this.myForm.noteValeur[i]; 
      
      console.log("test",this.etudiantsNotes[i]);
      
}
    }
  createNotes() {

    /*for (let i=0;i<this.etudiantsNotes.length;i++){
          this.etudiantsNotes[i].noteValeur = 17; 
          console.log("test",this.etudiantsNotes[i]);
          
    }*/
    console.log(this.etudiantsNotes[0]);
    this.etudiantsNotesService.createEtudiantsNotes(this.notes,this.etudiantsNotes);
  }
  


}

