import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';
import { Note } from '../Model/note.model';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/user';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  
  constructor(private noteService : NoteService) { }
  notes: Array<Note> = [];
  users: User[] = [];
  


  ngOnInit() {
    //this.noteService.getNotes().then(notes => this.notes = notes);
    this.noteService.getNotes().subscribe(responseNotes => this.notes = responseNotes);    
    
  }

  
}
