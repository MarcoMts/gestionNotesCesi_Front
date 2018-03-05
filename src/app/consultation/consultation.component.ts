import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';
import { Note } from '../Model/note.model';
@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  
  constructor(private noteService : NoteService) { }
  notes: Array<Note> = [];
  


  ngOnInit() {
    //this.noteService.getNotes().then(notes => this.notes = notes);
    this.noteService.getNotes().subscribe(responseNotes => this.notes = responseNotes);    
    
  }

  
}
