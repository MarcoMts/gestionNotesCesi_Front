import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  
  constructor(private noteService : NoteService,private route: ActivatedRoute) { }
  notes = [];
  users = [];
  idEleve : any;
  private sub: any;
  

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idEleve = +params['idEleve']; // (+) converts string 'id' to a number
      //Recupere les notes de l'eleve connecte
      this.noteService.getNotes(this.idEleve).subscribe(responseNotes =>{
      this.notes = responseNotes
      console.log("test idEleve",this.idEleve);
      });    
      // In a real app: dispatch action to load the details here.
   });
   
    
  }

  
}
