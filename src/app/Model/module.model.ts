import {Filiere} from "./filiere.model";
import {Intervenant} from "./intervenant.model";

export class Module {
private _idModule : number;
private _libelleModule : string;
private _filiere: Filiere;
private _intervenants : Array<Intervenant>;
private _isSaisi : boolean;

    constructor(idModule: number, libelleModule : string)
    {
        this._idModule=idModule;
        this._libelleModule = libelleModule;
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
    get isSaisi():  boolean {
        return this._isSaisi;
    }
    set isSaisi(value: boolean) {
        this._isSaisi = value;
    }  
}