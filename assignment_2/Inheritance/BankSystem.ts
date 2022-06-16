import { Account } from "./Account";
import { LoanAccount } from "./LoanAccount";
import { SavingAccount } from "./SavingsAccount";
import { TravelAccount } from "./TravelAccount";

let account : Account = Account.addAccount("3161056-0428", "SBI0037", "Dharati Patel", "342-975-2499", "Apt-21, Moore Park & Baskom Ave, San Jose, CA, USA, 93433");
let savingAcc : Account = SavingAccount.addSavingAccount("3161056-0428", "SBI0037", "Dharati Patel", "342-975-2499", "Apt-21, Moore Park & Baskom Ave, San Jose, CA, USA, 93433",1000);
let loanAcc : Account = LoanAccount.addLoanAccount("3161056-0428", "SBI0037", "Dharati Patel", "342-975-2499", "Apt-21, Moore Park & Baskom Ave, San Jose, CA, USA, 93433",25000, 25000, 3.5, "Car Loan");
let travelAcc : Account = TravelAccount.addTravelAccount("3161056-0428", "SBI0037", "Dharati Patel", "342-975-2499", "Apt-21, Moore Park & Baskom Ave, San Jose, CA, USA, 93433", 2000, "Business Trip");

let accArr : Account[] = [];
accArr.push(account);
accArr.push(savingAcc);
accArr.push(loanAcc);
accArr.push(travelAcc);

for(let acc of accArr){
    console.log("-------------------- Account Details --------------------");
    acc.displayAccount();
    console.log();
}