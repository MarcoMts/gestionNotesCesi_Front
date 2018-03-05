import {Filiere} from "./filiere.model";
import {Intervenant} from "./intervenant.model";

export class Module {
    private _idModule : number;
    private _libelleModule : string;
    private _filiere: Filiere;
    private _intervenants : Array<Intervenant>;
    private _moduleIsSaisi : boolean;
    private _moduleIsValid : boolean;
    constructor(idModule: number, libelleModule : string, moduleIsSaisi : boolean, moduleIsValid : boolean)
    {
        this._idModule=idModule;
        this._libelleModule = libelleModule;
        this._moduleIsSaisi = moduleIsSaisi;
        this._moduleIsValid = moduleIsValid;
    }
    get idModule(): number {
        return this._idModule;
    }

    get libelleModule(): string {
        return this._libelleModule;
    }
    set libelleModule(value: string) {
        this._libelleModule = value;
    }  

    get intervenants():  Array<Intervenant> {
        return this._intervenants;
    }
    set intervenants(value: Array<Intervenant>) {
        this._intervenants = value;
    }  
    get moduleIsValid():  boolean {
        return this._moduleIsValid;
    }
    set moduleIsValid(value: boolean) {
        this._moduleIsValid = value;
    } 
    get moduleIsSaisi():  boolean {
        return this._moduleIsSaisi;
    }
    set moduleIsSaisi(value: boolean) {
        this._moduleIsSaisi = value;
    } 
}