"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingAccount = void 0;
const Account_1 = require("./Account");
class SavingAccount extends Account_1.Account {
    constructor(_accountId, _IFSCCode, _customerName, _contactNo, _address, _balance) {
        super(_accountId, _IFSCCode, _customerName, _contactNo, _address);
        this._balance = _balance;
    }
    //Getter
    get balance() {
        return this._balance;
    }
    //OverRidden Method
    displayAccount() {
        super.displayAccount();
        console.log("Balance = " + this._balance);
    }
    //Other Methods
    static addSavingAccount(accId, IFSC, custName, cntNo, address, bal) {
        let acc = new SavingAccount(accId, IFSC, custName, cntNo, address, bal);
        return acc;
    }
    creditAccount(amt) {
        this._balance += amt;
        return this._balance;
    }
    debitAccount(amt) {
        if (this._balance - amt > 1000) {
            this._balance -= amt;
            return this._balance;
        }
        else
            throw new RangeError("Not Innuf balance available");
    }
}
exports.SavingAccount = SavingAccount;
