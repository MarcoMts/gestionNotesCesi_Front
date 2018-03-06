import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";

import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import {Note} from "../app/model/note.model";


@Injectable()

export class NoteService {
    constructor(private http:Http) {
    }
    private url:string="http://10.129.128.145:81/TestSlim/public/";
    Notes : Array<Note>; 
    
   /* getNotesJSON(){
        return this.http.get('./assets/data/Notes.json').toPromise().then(data => data.json());
    }

    fromJsonToNotes(): Promise<Array<Note>> {
        return this.getNotesJSON().then((data) => {
            return data.map(d => new Note(d.idNote, d.noteValeur, d.noteIsValid))
        })
    }*/
    /**
     * Ramene les notes d'un eleve
     */
    getNotes(){
        return this.http.get(this.url+"notes/eleve/1").map((response : Response)=>response.json());
    }
    /**
     * Ramene toutes les filieres
     */
    getFilieres() {
        return this.http.get(this.url+"filieres").map((response : Response)=>response.json());
    }
    /**
     * Ramene toutes promotions de 
     * @param selectedFiliere 
     */
    getPromotions(selectedFiliere : string) {
        
        return this.http.get(this.url+"promotions/1").map((response : Response)=>response.json());
        
    }
    /**
     * 
     * @param selectedPromotion 
     */
    getModules(selectedPromotion : string) {
       
        return this.http.get(this.url+"modules/1").map((response : Response)=>response.json());
        
    }
    getModulesIntervenant(selectedPromotion : string) {
        return this.http.get(this.url+"modules/1/1").map((response : Response)=>response.json());
    }
    
    getEtudiantsNotes(selectedModule : string) {
        return this.http.get(this.url+"notes/1").map((response : Response)=>response.json());
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
        let jsonInfo = "{\"login\":\""+email+"\",\"pwd\":\""+password+"\"}";
        return this.http.post(this.url+"login/eleve",jsonInfo);

    } 
    loginPilote(email : string, password : string) {
        return this.http.get('./assets/data/loginPilote.json').map((response : Response)=>response.json());
    } 
    loginIntervenant(email : string, password : string) {
        return this.http.get('./assets/data/loginIntervenant.json').map((response : Response)=>response.json());
    } 

}


