import {Promotion} from "./promotion.model";
import {Filiere} from "./filiere.model";

export class Eleve {
private _idEleve : number;
private _eleveNom : string;
private _elevePrenom : string;
private _eleveEmail : string;
private _eleveMotDePasse : string;
private _promotion : Promotion;
private _filiere : Filiere;

    constructor(idEleve: number, eleveNom : string)
    {
        this._idEleve=idEleve;
        this._eleveNom = eleveNom;
    }
    get idEleve(): number {
        return this._idEleve;
    }   
    get eleveNom(): string {
    return this._eleveNom;
    }
    set eleveNom(value: string) {
    this._eleveNom = value;
    }  
    get elevePrenom(): string {
    return this._elevePrenom;
    }
    set elevePrenom(value: string) {
    this._elevePrenom = value;
    }  
    get eleveEmail(): string {
    return this._eleveEmail;
    }
    set eleveEmail(value: string) {
    this._eleveEmail = value;
    } 
    get eleveMotDePasse(): string {
    return this.eleveMotDePasse;
    }
    set eleveMotDePasse(value: string) {
    this.eleveMotDePasse = value;
    }   
    get promotion(): Promotion {
    return this._promotion;
    }
    set promotion(value: Promotion) {
    this._promotion = value;
    }   
    get Filiere(): Filiere {
    return this._filiere;
    }
    set Filiere(value: Filiere) {
    this._filiere = value;
    }   
}