import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";

import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()

export class NoteService {
    constructor(private http:Http) {
    }
    private url:string="http://localhost:8080/notes";
    getNotes(){
        return this.http.get(this.url).map((response : Response)=>response.json());
    }
     getNotesJSON() {
        return this.http.get('./assets/data/Notes.json').map((response : Response)=>response.json());
    }
    get() {
        return this.http.get('./assets/data/Notes.json').map((response : Response)=>response.json());
    }
    getFilieres() {
        return this.http.get('./assets/data/Filieres.json').map((response : Response)=>response.json());
    }
    getPromotions(selectedFiliere : string) {
        if(selectedFiliere==="1")
        {
            return this.http.get('./assets/data/Promotions.json').map((response : Response)=>response.json());
            
        }
        else
        {
            return this.http.get('./assets/data/Promotions2.json').map((response : Response)=>response.json());
            
        }
    }
    getModules(selectedPromotion : string) {
        if(selectedPromotion==="2")
        {
            return this.http.get('./assets/data/Modules.json').map((response : Response)=>response.json());
            
        }
        else
        {
            return this.http.get('./assets/data/Modules2.json').map((response : Response)=>response.json());
            
        }
    }
    getEtudiantsNotes(selectedModule : string) {
        return this.http.get('./assets/data/Etudiants.json').map((response : Response)=>response.json());
    }
    
    
}


