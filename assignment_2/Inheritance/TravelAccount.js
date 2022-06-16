"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelAccount = void 0;
const SavingsAccount_1 = require("./SavingsAccount");
class TravelAccount extends SavingsAccount_1.SavingAccount {
    constructor(_accountId, _IFSCCode, _customerName, _contactNo, _address, _balance, _tripType) {
        super(_accountId, _IFSCCode, _customerName, _contactNo, _address, _balance);
        this._tripType = _tripType;
    }
    //Setter
    set tripType(tripType) {
        this._tripType = tripType;
    }
    //Getter
    get tripType() {
        return this._tripType;
    }
    //OverRidden Method
    displayAccount() {
        super.displayAccount();
        console.log("Trip Type = " + this._tripType);
    }
    //Other Methods
    static addTravelAccount(accId, IFSC, custName, cntNo, address, bal, tripType) {
        let acc = new TravelAccount(accId, IFSC, custName, cntNo, address, bal, tripType);
        return acc;
    }
}
exports.TravelAccount = TravelAccount;
