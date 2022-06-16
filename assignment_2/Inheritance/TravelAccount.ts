import { Account } from "./Account";
import { SavingAccount } from "./SavingsAccount";

export class TravelAccount extends SavingAccount{
    constructor(_accountId : string, _IFSCCode : string, _customerName : string, _contactNo : string, _address : string, _balance : number, private _tripType : string){
        super(_accountId, _IFSCCode, _customerName, _contactNo, _address, _balance);
    }

    //Setter
    public set tripType(tripType : string){
        this._tripType = tripType;
    }

    //Getter
    public get tripType() : string{
        return this._tripType;
    }

    //OverRidden Method
    public displayAccount(){
        super.displayAccount();
        console.log("Trip Type = " + this._tripType);
    }

    //Other Methods
    public static addTravelAccount(accId : string, IFSC : string, custName : string, cntNo : string, address : string, bal : number, tripType : string) : Account{
        let acc : Account = new TravelAccount(accId, IFSC, custName, cntNo, address, bal, tripType);
        return acc;
    }
}
