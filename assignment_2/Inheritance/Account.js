"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(_accountId, _IFSCCode, _customerName, _contactNo, _address) {
        this._accountId = _accountId;
        this._IFSCCode = _IFSCCode;
        this._customerName = _customerName;
        this._contactNo = _contactNo;
        this._address = _address;
    }
    //Getter
    get accountId() {
        return this._accountId;
    }
    get IFSCCode() {
        return this._IFSCCode;
    }
    get customerName() {
        return this._customerName;
    }
    get contactNo() {
        return this._contactNo;
    }
    get address() {
        return this._address;
    }
    //Setter
    set accountId(accNo) {
        this._accountId = accNo;
    }
    set IFSCCode(IFSC) {
        this._IFSCCode = IFSC;
    }
    set customerName(custName) {
        this._customerName = custName;
    }
    set contactNo(no) {
        this._contactNo = no;
    }
    set address(add) {
        this._address = add;
    }
    //other Methods
    static addAccount(accId, IFSC, custName, cntNo, address) {
        let acc = new Account(accId, IFSC, custName, cntNo, address);
        return acc;
    }
    displayAccount() {
        console.log("Account No = " + this._accountId);
        console.log("IFSC Code = " + this._IFSCCode);
        console.log("Customer Name = " + this._customerName);
        console.log("Contact No = " + this._contactNo);
        console.log("Address = " + this._address);
    }
}
exports.Account = Account;
