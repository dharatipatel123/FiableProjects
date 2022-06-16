export class Account{
    constructor(private _accountId : string, private _IFSCCode : string, private _customerName : string, private _contactNo : string, private _address : string){}

    //Getter
    public get accountId():string{
        return this._accountId;
    }

    public get IFSCCode():string{
        return this._IFSCCode;
    }

    public get customerName():string{
        return this._customerName;
    }

    public get contactNo():string{
        return this._contactNo;
    }

    public get address():string{
        return this._address;
    }

    //Setter
    public set accountId(accNo : string){
        this._accountId = accNo;
    }

    public set IFSCCode(IFSC : string){
        this._IFSCCode = IFSC;
    }

    public set customerName(custName : string){
        this._customerName = custName;
    }

    public set contactNo(no : string){
        this._contactNo = no;
    }

    public set address(add : string){
        this._address = add;
    }

    //other Methods
    public static addAccount(accId : string, IFSC : string, custName : string, cntNo : string, address : string) : Account{
        let acc : Account = new Account(accId, IFSC, custName, cntNo, address);
        return acc;
    }

    public displayAccount(){
        console.log("Account No = " + this._accountId);
        console.log("IFSC Code = " + this._IFSCCode);
        console.log("Customer Name = " + this._customerName);
        console.log("Contact No = " + this._contactNo);
        console.log("Address = " + this._address);
    }
}