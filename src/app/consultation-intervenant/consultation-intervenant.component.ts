import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';
import { Note } from '../Model/note.model';
import {Module} from '../Model/module.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultation-intervenant',
  templateUrl: './consultation-intervenant.component.html',
  styleUrls: ['./consultation-intervenant.component.css']
})
export class ConsultationIntervenantComponent implements OnInit {

  constructor(private filieresService : NoteService, private promotionsService : NoteService, private modulesService : NoteService, private etudiantsNotesService : NoteService,private route: ActivatedRoute) { }
  
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
  private sub: any;
  idIntervenant: any;
  
  
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {

      this.idIntervenant = params['id']; 
      this.filieresService.getFilieres().subscribe(responseFilieres => 
        {
          this.filieres = responseFilieres
          this.updateFilieres(); 
          
        });    
    });

    //Ramene toutes les filieres au chargement de la page
   
    let reslt : any = [];

    this.selectedModule= <HTMLSelectElement>document.getElementById("module");
    for (let i=0;i<this.modules.length;i++){
      if(this.selectedModule.value == this.modules[i].libelleModule) {
         reslt = this.modules[i]
      }
    }
  }
  /**
   * Au changement de la filiere, ramene les promotions de la filiere selectionnee
   */
  updateFilieres() {
    //Recupere la filiere selectionnee dans le HTML
    this.selectedFiliere=<HTMLSelectElement>document.getElementById("filiere");    
    this.promotionsService.getPromotions(this.selectedFiliere.value).subscribe(responsePromotions =>
      {
        this.promotions = responsePromotions
        
        this.updatePromotions();
        
      } );    
  }
/**
   * Au changement de la promotion, ramene les modules de la promotion selectionnee
   */
  updatePromotions() {
    //Recupere la promotion selectionnee dans le HTML
    this.selectedPromotion=<HTMLSelectElement>document.getElementById("promotion"); 
    //Ramene tout les modules d'une promotion, les modules dont l'intervenant intervient
    this.modulesService.getModulesIntervenant(this.selectedPromotion.value).subscribe(responseModules =>
      {
        this.modules = responseModules
        this.updateModules(); 
        console.log(this.modules);
      } );  
    


  }
  /**
   * Au changement du module, ramene les notes du module selectionne
   */
  updateModules() {
    let reslt : any = [];
    this.selectedModule= <HTMLSelectElement>document.getElementById("module");
    for (let i=0;i<this.modules.length;i++){
      if(this.selectedModule.value == this.modules[i].libelleModule) {
         reslt = this.modules[i]
      }
    }
       // this.etudiantsNotesService.getNotes().subscribe(responseNotes => this.notes = responseNotes);    

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
  /**
   * Modification des notes du module
   */
  updateNotes() {
    
    this.etudiantsNotesService.setEtudiantsNotes(this.selectedModule.value,this.etudiantsNotes);
    console.log(this.etudiantsNotes);
    
    }
    /**
   * Ajout des notes au module
   */
  createNotes() {
    this.etudiantsNotesService.createEtudiantsNotes(this.notes,this.etudiantsNotes);
    console.log(this.etudiantsNotes);
  }
}

