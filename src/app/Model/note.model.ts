export class Note {
private _idNote : number;
private _noteValeur : number;
private _noteIsValid : boolean;

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
}