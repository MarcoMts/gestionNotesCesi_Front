import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';

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
  
  filieres = [];    
  promotions = [];
  modules = [];
  etudiantsNotes = [];
  
  
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
    this.selectedModule=<HTMLSelectElement>document.getElementById("module");    
    this.etudiantsNotesService.getEtudiantsNotes(this.selectedModule.value).subscribe(responseEtudiantsNotes => this.etudiantsNotes = responseEtudiantsNotes);    
    console.log(this.selectedModule.value);    
  }


}
