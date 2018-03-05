
export class Intervenant {
    private _idIntervenant : number;
    private _intervenantNom : string;
    private _intervenantPrenom : string;
    private _intervenantEmail : string;
    private _intervenantMotDePasse : string;

    constructor(idIntervenant: number, intervenantNom : string)
    {
        this._idIntervenant=idIntervenant;
        this._intervenantNom = intervenantNom;
    }
    get idIntervenant(): number {
        return this._idIntervenant;
    }   
    get intervenantNom(): string {
        return this._intervenantNom;
    }
    set intervenantNom(value: string) {
        this._intervenantNom = value;
    }  
    get intervenantPrenom(): string {
        return this._intervenantPrenom;
    }
    set intervenantPrenom(value: string) {
        this._intervenantPrenom = value;
    }  
    get intervenantEmail(): string {
        return this._intervenantEmail;
    }
    set intervenantEmail(value: string) {
        this._intervenantEmail = value;
    } 
    get intervenantMotDePasse(): string {
        return this.intervenantMotDePasse;
    }
    set intervenantMotDePasse(value: string) {
        this.intervenantMotDePasse = value;
    }   

}