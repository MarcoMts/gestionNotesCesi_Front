export class Filiere {
    
private _idFiliere : number;
private _libelleFiliere : string;

    constructor(idFiliere: number, libelleFiliere : string)
    {
        this._idFiliere=idFiliere;
        this._libelleFiliere = libelleFiliere;
    }
    get idFiliere(): number {
        return this._idFiliere;
    }
    
    get libelleFiliere(): string {
    return this._libelleFiliere;
    }
    set libelleFiliere(value: string) {
    this._libelleFiliere = value;
    }  
}