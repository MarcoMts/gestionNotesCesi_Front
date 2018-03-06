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
  isValid =false;
  
  
  ngOnInit() {
    this.filieresService.getFilieres().subscribe(responseFilieres => 
      {
        this.filieres = responseFilieres
        this.updateFilieres(); 
        
      });    
    let reslt : any = [];

    this.selectedModule= <HTMLSelectElement>document.getElementById("module");
    for (let i=0;i<this.modules.length;i++){
      if(this.selectedModule.value == this.modules[i].libelleModule) {
         reslt = this.modules[i]
      }
    }
  }
  /**
   * Recupre toutes les filieres
   */
  updateFilieres() {
    this.selectedFiliere=<HTMLSelectElement>document.getElementById("filiere");    
    this.promotionsService.getPromotions(this.selectedFiliere.value).subscribe(responsePromotions =>
      {
        this.promotions = responsePromotions
        this.updatePromotions();
        
      } );    
  }
/**
   * Recupre toutes les promotions de la filiere selectionne 
   */
  updatePromotions() {
    this.selectedPromotion=<HTMLSelectElement>document.getElementById("promotion");    
    this.modulesService.getModulesIntervenant(this.selectedPromotion.value).subscribe(responseModules =>
      {
        this.modules = responseModules
        this.updateModules(); 
        console.log(this.modules);
      } );  
    


  }
  /**
   * Recupre tout les modules où intervient l'intervenant dans la promotion selectionné
   */
  updateModules() {
    let reslt : any = [];
    this.selectedModule= <HTMLSelectElement>document.getElementById("module");
    for (let i=0;i<this.modules.length;i++){
      if(this.selectedModule.value == this.modules[i].libelleModule) {
         reslt = this.modules[i]
      }
    }
    this.etudiantsNotesService.getEtudiantsNotes(this.selectedModule.value).subscribe(
      
      responseEtudiantsNotes => 
      {
        this.etudiantsNotes = responseEtudiantsNotes

        console.log("test notes",this.etudiantsNotes);
        if(this.etudiantsNotes[0].noteValeur===null)
        {
          this.isSaisi=false;
        }
        {
          this.isSaisi=true;
        }
        if(this.etudiantsNotes[0].isValid==0)
        {
          this.isValid=false;
        }
        else
        {
          this.isValid=true;
        }
      }
    ); 
    
   // this.etudiantsNotesService.getNotes().subscribe(responseNotes => this.notes = responseNotes);   
   
  }
  updateNotes() {
    
    this.etudiantsNotesService.setEtudiantsNotes(this.selectedModule.value,this.etudiantsNotes);
    console.log(this.etudiantsNotes);
    
    }
  createNotes() {
    this.etudiantsNotesService.createEtudiantsNotes(this.notes,this.etudiantsNotes);
    console.log(this.etudiantsNotes);
  }
}

