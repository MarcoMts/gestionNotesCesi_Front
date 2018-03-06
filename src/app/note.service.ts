import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";

import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import {Note} from "../app/model/note.model";


@Injectable()

export class NoteService {
    constructor(private http:Http) {
    }
    private url:string="http://localhost:8080/notes";
    Notes : Array<Note>; 
    
   /* getNotesJSON(){
        return this.http.get('./assets/data/Notes.json').toPromise().then(data => data.json());
    }

    fromJsonToNotes(): Promise<Array<Note>> {
        return this.getNotesJSON().then((data) => {
            return data.map(d => new Note(d.idNote, d.noteValeur, d.noteIsValid))
        })
    }*/
    getNotes(){
        return this.http.get('./assets/data/Notes.json').map((response : Response)=>response.json());
    }
    getFilieres() {
        return this.http.get('./assets/data/Filieres.json').map((response : Response)=>response.json());
    }
    getPromotions(selectedFiliere : string) {
        
        return this.http.get('./assets/data/Promotions.json').map((response : Response)=>response.json());
        
    }
    getModules(selectedPromotion : string) {
       
        return this.http.get('./assets/data/Modules.json').map((response : Response)=>response.json());
        
    }
    getModulesIntervenant(selectedPromotion : string) {
        return this.http.get('./assets/data/Modules.json').map((response : Response)=>response.json());
    }
    getEtudiantsNotes(selectedModule : string) {
        return this.http.get('./assets/data/Etudiants.json').map((response : Response)=>response.json());
    }


    setEtudiantsNotes(module : any, notes : Array<Note>) {
        return this.http.get('./assets/data/Etudiants.json');
    }
    createEtudiantsNotes(module : any, notes : Array<Note>,) {
        return this.http.get('./assets/data/Etudiants.json');
    }  
    validateEtudiantsNotes( idModule : string) {

    } 
    loginEleve(email : string, password : string) {
        return this.http.get('./assets/data/loginEleve.json').map((response : Response)=>response.json());
    } 
    loginPilote(email : string, password : string) {
        return this.http.get('./assets/data/loginPilote.json').map((response : Response)=>response.json());
    } 
    loginIntervenant(email : string, password : string) {
        return this.http.get('./assets/data/loginIntervenant.json').map((response : Response)=>response.json());
    } 

}


