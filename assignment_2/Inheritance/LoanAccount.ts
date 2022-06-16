import { Account } from "./Account";

export class LoanAccount extends Account{
    constructor(_accountId : string, _IFSCCode : string, _customerName : string, _contactNo : string, _address : string, private _loanAmount : number, private _remainingLoanAmount : number, private _interestRate : number, private _loanType : string){
        super(_accountId, _IFSCCode, _customerName, _contactNo, _address);
    }

    //OverRidden Method
    public displayAccount(){
        super.displayAccount();
        console.log("Loan Amount = " + this._loanAmount);
        console.log("Remaining Loan Amount = " + this._remainingLoanAmount);
        console.log("Interest Rate = " + this._interestRate);
        console.log("Loan Type = " + this._loanType);
    }

    //Getter
    public get loanAmount() : number{
        return this._loanAmount;
    }

    public get remainingLoanAmount() : number{
        return this._remainingLoanAmount;
    }

    public get interestRate() : number{
        return this._interestRate;
    }

    public get loanType() : string{
        return this._loanType;
    }

    //Setter
    public set interestRate(rate : number){
        this._interestRate = rate;
    }

    //Other Methods
    public static addLoanAccount(accId : string, IFSC : string, custName : string, cntNo : string, address : string, loanAmt : number, remLoanAmt : number, interestRate : number, loanType : string) : Account{
        let acc : Account = new LoanAccount(accId, IFSC, custName, cntNo, address, loanAmt, remLoanAmt, interestRate, loanType);
        return acc;
    }

    public payInstallment(amount : number){
        this._remainingLoanAmount -= amount;
    }
}