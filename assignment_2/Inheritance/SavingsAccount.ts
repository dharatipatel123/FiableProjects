import { Account } from "./Account";

export class SavingAccount extends Account{
    constructor(_accountId : string, _IFSCCode : string, _customerName : string, _contactNo : string, _address : string, private _balance : number){
        super(_accountId, _IFSCCode, _customerName, _contactNo, _address);
    }

    //Getter
    public get balance() : number{
        return this._balance;
    }

    //OverRidden Method
    public displayAccount(){
        super.displayAccount();
        console.log("Balance = " + this._balance);
    }

    //Other Methods
    public static addSavingAccount(accId : string, IFSC : string, custName : string, cntNo : string, address : string, bal : number) : Account{
        let acc : Account = new SavingAccount(accId, IFSC, custName, cntNo, address, bal);
        return acc;
    }

    public creditAccount(amt : number) : number{
        this._balance += amt;
        return this._balance;
    }

    public debitAccount(amt : number) : number{
        if(this._balance - amt > 1000){
            this._balance -= amt;
            return this._balance;
        }
        else
            throw new RangeError("Not Innuf balance available");
    }
    
}