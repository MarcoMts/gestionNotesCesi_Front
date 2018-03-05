export class Promotion {
private _idPromotion : number;
private _libellePromotion : string;

    constructor(idPromotion: number, libellePromotion : string)
    {
        this._idPromotion=idPromotion;
        this._libellePromotion = libellePromotion;
    }
    get idPromotion(): number {
        return this._idPromotion;
    }
    
    get libellePromotion(): string {
    return this._libellePromotion;
    }
    set libellePromotion(value: string) {
    this._libellePromotion = value;
    }  
}