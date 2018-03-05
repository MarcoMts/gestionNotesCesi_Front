import {Eleve} from "./eleve.model";
import {Module} from "./module.model";

export class Note {
private _idNote : number;
private _noteValeur : number;
private _noteIsValid : boolean;
private _eleve : Eleve;
private _module : Module;

    constructor(idNote: number, libelleNote : number, noteIsValid : boolean)
    {
        this._idNote=idNote;
        this._noteValeur = libelleNote;
        this._noteIsValid = noteIsValid;
        
    }
    get idNote(): number {
        return this._idNote;
    }
    
    get noteValeur(): number {
    return this._noteValeur;
    }
    set noteValeur(value: number) {
    this._noteValeur = value;
    }  

    get noteIsValid(): number {
    return this._noteValeur;
    }
    set noteIsValid(value: number) {
    this._noteValeur = value;
    }     
    get Eleve(): Eleve {
    return this._eleve;
    }
    set Eleve(value: Eleve) {
    this._eleve = value;
    }  
    get Module(): Module {
    return this._module;
    }
    set Module(value: Module) {
    this._module = value;
    }  
}