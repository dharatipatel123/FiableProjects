"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanAccount = void 0;
const Account_1 = require("./Account");
class LoanAccount extends Account_1.Account {
    constructor(_accountId, _IFSCCode, _customerName, _contactNo, _address, _loanAmount, _remainingLoanAmount, _interestRate, _loanType) {
        super(_accountId, _IFSCCode, _customerName, _contactNo, _address);
        this._loanAmount = _loanAmount;
        this._remainingLoanAmount = _remainingLoanAmount;
        this._interestRate = _interestRate;
        this._loanType = _loanType;
    }
    //OverRidden Method
    displayAccount() {
        super.displayAccount();
        console.log("Loan Amount = " + this._loanAmount);
        console.log("Remaining Loan Amount = " + this._remainingLoanAmount);
        console.log("Interest Rate = " + this._interestRate);
        console.log("Loan Type = " + this._loanType);
    }
    //Getter
    get loanAmount() {
        return this._loanAmount;
    }
    get remainingLoanAmount() {
        return this._remainingLoanAmount;
    }
    get interestRate() {
        return this._interestRate;
    }
    get loanType() {
        return this._loanType;
    }
    //Setter
    set interestRate(rate) {
        this._interestRate = rate;
    }
    //Other Methods
    static addLoanAccount(accId, IFSC, custName, cntNo, address, loanAmt, remLoanAmt, interestRate, loanType) {
        let acc = new LoanAccount(accId, IFSC, custName, cntNo, address, loanAmt, remLoanAmt, interestRate, loanType);
        return acc;
    }
    payInstallment(amount) {
        this._remainingLoanAmount -= amount;
    }
}
exports.LoanAccount = LoanAccount;
