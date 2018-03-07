import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';
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
  notes = [];
  isValid =false;
  private sub: any;
  idIntervenant: any;
  idModuleSelected : any;
  
  
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
   
    /*let reslt : any = [];

    this.selectedModule= <HTMLSelectElement>document.getElementById("module");
    for (let i=0;i<this.modules.length;i++){
      if(this.selectedModule.value == this.modules[i].libelleModule) {
         reslt = this.modules[i]
      }
    }*/
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
    this.sub = this.route.params.subscribe(params => {
      this.idIntervenant = +params['idIntervenant']; // (+) converts string 'id' to a number
      //Recupere les notes de l'eleve connecte
      this.selectedPromotion=<HTMLSelectElement>document.getElementById("promotion"); 
      
       //Ramene tout les modules d'une promotion, les modules dont l'intervenant intervient
       this.modulesService.getModulesIntervenant(this.selectedPromotion.value,this.idIntervenant).subscribe(responseModules =>
         {
           this.modules = responseModules
           this.updateModules(); 
           console.log("les modules",this.modules);
         } );  
      });    
   
  }
  /**
   * Au changement du module, ramene les notes du module selectionne
   */
  updateModules() {
    let reslt : any = [];
    this.selectedModule= <HTMLSelectElement>document.getElementById("module");
    for (let i=0;i<this.modules.length;i++){
      if(this.selectedModule.value == this.modules[i].libelleModule) {
         reslt = this.modules[i];
         this.idModuleSelected = this.modules[i].idModule;
      }
    }
       // this.etudiantsNotesService.getNotes().subscribe(responseNotes => this.notes = responseNotes);    

    this.etudiantsNotesService.getEtudiantsNotes(this.idModuleSelected).subscribe(
      
      responseEtudiantsNotes => 
      {
        this.etudiantsNotes = responseEtudiantsNotes

        console.log("test notes",this.etudiantsNotes);
        if(this.etudiantsNotes[0].noteValeur===null)
        {
          this.isSaisi=false;
          console.log(this.etudiantsNotes[0]);
        }
        else
        {
          this.isSaisi=true;
        }
        if(this.etudiantsNotes[0].isValid==="0")
        {
          this.isValid=false;
          console.log(this.etudiantsNotes[0]);
          
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
    this.selectedModule= <HTMLSelectElement>document.getElementById("module");
    for (let i=0;i<this.modules.length;i++){
      if(this.selectedModule.value == this.modules[i].libelleModule) {
         this.idModuleSelected = this.modules[i].idModule;
      }
    }
    this.etudiantsNotesService.setEtudiantsNotes(this.idModuleSelected,this.etudiantsNotes);
    }
    /**
   * Ajout des notes au module
   */
  createNotes() {
    this.selectedModule= <HTMLSelectElement>document.getElementById("module");
    for (let i=0;i<this.modules.length;i++){
      if(this.selectedModule.value == this.modules[i].libelleModule) {
         this.idModuleSelected = this.modules[i].idModule;
      }
    }
    this.etudiantsNotesService.createEtudiantsNotes(this.idModuleSelected,this.etudiantsNotes);

    
    
  }
}

