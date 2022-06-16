"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = require("./Account");
const LoanAccount_1 = require("./LoanAccount");
const SavingsAccount_1 = require("./SavingsAccount");
const TravelAccount_1 = require("./TravelAccount");
let account = Account_1.Account.addAccount("3161056-0428", "SBI0037", "Dharati Patel", "342-975-2499", "Apt-21, Moore Park & Baskom Ave, San Jose, CA, USA, 93433");
let savingAcc = SavingsAccount_1.SavingAccount.addSavingAccount("3161056-0428", "SBI0037", "Dharati Patel", "342-975-2499", "Apt-21, Moore Park & Baskom Ave, San Jose, CA, USA, 93433", 1000);
let loanAcc = LoanAccount_1.LoanAccount.addLoanAccount("3161056-0428", "SBI0037", "Dharati Patel", "342-975-2499", "Apt-21, Moore Park & Baskom Ave, San Jose, CA, USA, 93433", 25000, 25000, 3.5, "Car Loan");
let travelAcc = TravelAccount_1.TravelAccount.addTravelAccount("3161056-0428", "SBI0037", "Dharati Patel", "342-975-2499", "Apt-21, Moore Park & Baskom Ave, San Jose, CA, USA, 93433", 2000, "Business Trip");
let accArr = [];
accArr.push(account);
accArr.push(savingAcc);
accArr.push(loanAcc);
accArr.push(travelAcc);
for (let acc of accArr) {
    console.log("-------------------- Account Details --------------------");
    acc.displayAccount();
    console.log();
}
