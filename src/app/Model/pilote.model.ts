
export class Pilote {
    private _idPilote : number;
    private _piloteNom : string;
    private _pilotePrenom : string;
    private _piloteEmail : string;
    private _piloteMotDePasse : string;

    constructor(idPilote: number, piloteNom : string)
    {
        this._idPilote=idPilote;
        this._piloteNom = piloteNom;
    }
    get idPilote(): number {
        return this._idPilote;
    }   
    get piloteNom(): string {
        return this._piloteNom;
    }
    set piloteNom(value: string) {
        this._piloteNom = value;
    }  
    get pilotePrenom(): string {
        return this._pilotePrenom;
    }
    set pilotePrenom(value: string) {
        this._pilotePrenom = value;
    }  
    get piloteEmail(): string {
        return this._piloteEmail;
    }
    set piloteEmail(value: string) {
        this._piloteEmail = value;
    } 
    get piloteMotDePasse(): string {
        return this.piloteMotDePasse;
    }
    set piloteMotDePasse(value: string) {
        this.piloteMotDePasse = value;
    }   

}