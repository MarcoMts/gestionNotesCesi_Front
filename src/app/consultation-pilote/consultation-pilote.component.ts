import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';
import { Note } from '../Model/note.model';
import {Module} from '../Model/module.model';


@Component({
  selector: 'app-consultation-pilote',
  templateUrl: './consultation-pilote.component.html',
  styleUrls: ['./consultation-pilote.component.css']
})
export class ConsultationPiloteComponent implements OnInit {

  constructor(private filieresService : NoteService, private promotionsService : NoteService, private modulesService : NoteService, private etudiantsNotesService : NoteService) { }
  
  selectedFiliere = null; 
  selectedPromotion = null; 
  selectedModule = null; 
  selectedEtudiantsNotes = null; 
  idModuleSelected= null; 
  isValid=false;
  filieres = [];    
  promotions = [];
  modules = [];
  etudiantsNotes = [];
  notes: Array<Note> = [];
  
  ngOnInit() {
    //Ramene toutes les filieres au chargement de la page
    this.filieresService.getFilieres().subscribe(responseFilieres => {
      this.filieres = responseFilieres
      this.updateFilieres();          
    });   
  }
  /**
   * Au changement de la filiere, ramene les promotions de la filiere selectionnee
   */
  updateFilieres() {
    this.selectedFiliere=<HTMLSelectElement>document.getElementById("filiere");   
    console.log("filiere",this.selectedFiliere.value); 
    
   
    this.promotionsService.getPromotions(this.selectedFiliere.value).subscribe(responsePromotions =>
      { this.promotions = responsePromotions
        console.log("promotions",this.promotions); 
        
      });    
      
    this.updatePromotions();
  }
/**
   * Au changement de la promotion, ramene les modules de la promotion selectionnee
   */
  updatePromotions() {
    this.selectedPromotion=<HTMLSelectElement>document.getElementById("promotion");    
    this.modulesService.getModules(this.selectedPromotion.value,this.selectedFiliere.value).subscribe(responseModules => {
      this.modules = responseModules
      this.updateModules();   
      
    });  

  }
  /**
   * Au changement du module, ramene les notes du module selectionne
   */
  updateModules() {
    let reslt : any = [];
    this.selectedModule=<HTMLSelectElement>document.getElementById("module");
    for (let i=0;i<this.modules.length;i++){
      if(this.selectedModule.value == this.modules[i].libelleModule) {
         reslt = this.modules[i]
         this.idModuleSelected = this.modules[i].idModule;
         
      }
    }
   // this.etudiantsNotesService.getNotes().subscribe(responseNotes => this.notes = responseNotes);    
    
    this.etudiantsNotesService.getEtudiantsNotes(this.idModuleSelected).subscribe(responseEtudiantsNotes =>
      {
      this.etudiantsNotes = responseEtudiantsNotes
      console.log("test etudiants",this.etudiantsNotes);
        if(this.etudiantsNotes[0].isValid==0)
        {
          this.isValid=false;
        }
        else
        {
          this.isValid=true;
        }      
      }); 
  
  
  }
  /**
   * Validation des notes du module
   */
  validateNotes() {
    let reslt : any = [];
    this.selectedModule=<HTMLSelectElement>document.getElementById("module");
    for (let i=0;i<this.modules.length;i++){
      if(this.selectedModule.value == this.modules[i].libelleModule) {
         reslt = this.modules[i]
         this.idModuleSelected = this.modules[i].idModule;
         
      }
    }    
    this.etudiantsNotesService.validateEtudiantsNotes(this.idModuleSelected);

    }
 


}
