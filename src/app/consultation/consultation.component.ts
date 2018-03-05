import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';
@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  
  constructor(private noteService : NoteService) { }
  notes = [];
  


  ngOnInit() {
    this.noteService.getNotesJSON().subscribe(responseNotes => this.notes = responseNotes);
  }
}
