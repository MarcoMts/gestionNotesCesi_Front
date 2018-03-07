import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";

import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import {Note} from "../app/model/note.model";


@Injectable()

export class NoteService {
    constructor(private http:Http) {
    }
    private urlIP:string="http://localhost/TestSlim/public/";
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
    getNotes(idEleve : string){
        return this.http.get(this.url+"notes/eleve/"+idEleve).map((response : Response)=>response.json());
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
        console.log("selected FIliere : ",selectedFiliere);
        
        return this.http.get(this.url+"promotions/"+selectedFiliere).map((response : Response)=>response.json());
    }
    /**
     * Ramene tout les modules d'une promotion
     * @param selectedPromotion 
     */
    getModules(selectedPromotion : string,selectedFiliere: string) {
        console.log("test slected promotion service : ",selectedPromotion)
        return this.http.get(this.url+"modules/"+selectedPromotion+"/"+selectedFiliere).map((response : Response)=>response.json());
        
    }
    /*
     * Ramene tout les modules d'une promotion, les modules ou l'intervenant intervient
     * @param selectedPromotion 
     */
    getModulesIntervenant(selectedPromotion : string,idIntervenant : string) {
        console.log("promotion service ",selectedPromotion);
        return this.http.get(this.url+"intervmodules/"+idIntervenant+"/"+selectedPromotion).map((response : Response)=>response.json());
    }
    /**
     * Ramene les notes des eleves d'un module 
     * @param selectedModule 
     */
    getEtudiantsNotes(selectedModule : string) {
        console.log("module choise",selectedModule);
        
        return this.http.get(this.url+"notes/"+selectedModule).map((response : Response)=>response.json());
    }
    /**
     * Modification d'un ensemble de notes
     * @param module 
     * @param notes 
     */
    setEtudiantsNotes(_module, notes) {
        const jsonNotes = notes.map(n => {
            return {
                idModule: _module,
                idEleve: n.idEleve,
                noteValeur: n.noteValeur
            };
        });
        return this.http.post(this.url+"notes/create",jsonNotes).toPromise().then(console.log).catch(console.log)
    }
    /**
     * Ajoute les notes des eleves a un module
     * @param module 
     * @param notes 
     */
    createEtudiantsNotes(_module, notes) {
        const jsonNotes = notes.map(n => {
            return {
                idModule: _module,
                idEleve: n.idEleve,
                noteValeur: n.noteValeur
            };
        });
        console.log("jsonNotes",jsonNotes);
        console.log("url",this.url+"notes/create");
        return this.http.post(this.url+"notes/create",jsonNotes).toPromise().then(console.log).catch(console.log)

        
    }  
    /**
     * Valide les notes les notes
     * @param idModule 
     */
    validateEtudiantsNotes( idModule : string) {
        let body : any;
        console.log("modulevalid",idModule);
        return this.http.get(this.url+"modulesvalid/"+idModule).toPromise().then(console.log).catch(console.log);
    } 
    /**
     * Ramene true si les informations de connexion de l'eleve sont correcte
     * @param email 
     * @param password 
     */
    loginEleve(email : string, password : string) {

        let jsonLogin= {login:email, pwd:password};
        
        return this.http.post(this.url+"login/eleve",jsonLogin).map((response : Response)=>response.json());

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


