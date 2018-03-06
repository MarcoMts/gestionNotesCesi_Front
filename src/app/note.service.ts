import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";

import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import {Note} from "../app/model/note.model";


@Injectable()

export class NoteService {
    constructor(private http:Http) {
    }
    private url:string="http://localhost/TestSlim/public/";
    private urlIP:string="http://10.129.128.145:81/TestSlim/public/";
    
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
    getNotes(idEleve : string){
        return this.http.get(this.url+"notes/eleve/1").map((response : Response)=>response.json());
    }
    /**
     * Ramene toutes les filieres
     */
    getFilieres() {
        return this.http.get(this.url+"filieres").map((response : Response)=>response.json());
    }
    /**
     * Ramene toutes promotions d'une filiere 
     * @param selectedFiliere 
     */
    getPromotions(selectedFiliere : string) {
        
        return this.http.get(this.url+"promotions/1").map((response : Response)=>response.json());
        
    }
    /**
     * Ramene tout les modules d'une promotion
     * @param selectedPromotion 
     */
    getModules(selectedPromotion : string) {
       
        return this.http.get(this.url+"modules/1").map((response : Response)=>response.json());
        
    }
    /**
     * Ramene tout les modules d'une promotion, les modules ou l'intervenant intervient
     * @param selectedPromotion 
     */
    getModulesIntervenant(selectedPromotion : string) {
        return this.http.get(this.url+"modules/1/1").map((response : Response)=>response.json());
    }
    /**
     * Ramene les notes des eleves d'un module 
     * @param selectedModule 
     */
    getEtudiantsNotes(selectedModule : string) {
        return this.http.get(this.url+"notes/1").map((response : Response)=>response.json());
    }
    /**
     * Modification d'un ensemble de notes
     * @param module 
     * @param notes 
     */
    setEtudiantsNotes(module : any, notes : Array<Note>) {
        return this.http.get('./assets/data/Etudiants.json');
    }
    /**
     * Ajoute les notes des eleves a un module
     * @param module 
     * @param notes 
     */
    createEtudiantsNotes(module : any, notes : Array<Note>,) {
        return this.http.get('./assets/data/Etudiants.json');
    }  
    /**
     * Valide les notes les notes
     * @param idModule 
     */
    validateEtudiantsNotes( idModule : string) {
        let body : any;
        return this.http.put(this.url+"modules/"+idModule,body);
    } 
    /**
     * Ramene true si les informations de connexion de l'eleve sont correcte
     * @param email 
     * @param password 
     */
    loginEleve(email : string, password : string) {

        let jsonLogin= {login:email, pwd:password};
        
        return this.http.post(this.url+"login/eleve",jsonLogin).map((response : Response)=>response.json());;

    } 
    /**
     * Ramene true si les informations de connexion du pilote sont correcte
     * @param email 
     * @param password 
     */
    loginPilote(email : string, password : string) {
        let jsonLogin= {login:email, pwd:password};
        
        return this.http.post(this.url+"login/pilote",jsonLogin).map((response : Response)=>response.json());
    } 
    /**
     * Ramene true si les informations de connexion de l'intervenant sont correcte
     * @param email 
     * @param password 
     */
    loginIntervenant(email : string, password : string) {
        let jsonLogin= {login:email, pwd:password};
        
        return this.http.post(this.url+"login/intervenant",jsonLogin).map((response : Response)=>response.json());
    } 

}


