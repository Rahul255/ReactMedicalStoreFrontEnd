import { reactLocalStorage } from "reactjs-localstorage";

const { default: AuthHandler } = require("./AuthHandler");
const { default: Axios } = require("axios");
const { default: Config } = require("./Config");    


class APIHandler {
    //concent for check login
    async checkLogin() {
        if(AuthHandler.checkTokenExpiry()){
            try{
            var response = await Axios.post(Config.refreshApiUrl, {
                refresh: AuthHandler.getRefreshToken(),
            });
            
            reactLocalStorage.set("token",response.data.access);
        }
        catch(error){
            console.log(error);
            //not using valid token for refresh
            AuthHandler.logoutUser();
            window.location = "/";
        }
    }
    }
    //concent for save company data
    async saveCompanyData(name,licence_no,address,contact,email,description){
        await this.checkLogin();
        //waite undil token get updated

        var response = await Axios.post(
            Config.companyApiUrl, 
            {
                name:name,
                licence_no:licence_no,
                address:address,
                contact:contact,
                email:email,
                description:description
            },
            {headers:{Authorization: "Bearer "+ AuthHandler.getLoginToken()}});

            return response;
            
    }
    //concent for fetch all companydata
    async fetchAllCompany(){
        await this.checkLogin();

        var response =  await Axios.get(Config.companyApiUrl,
            {headers:{Authorization: "Bearer "+ AuthHandler.getLoginToken()}});

        return response;    
    }

    async fetchCompanyDetails(id){
        await this.checkLogin();

        var response =  await Axios.get(Config.companyApiUrl+""+id+"/",
            {headers:{Authorization: "Bearer "+ AuthHandler.getLoginToken()}});

        return response;    
    }
//edit the company data
async editCompanyData(
    name,
    licence_no,
    address,
    contact_no,
    email,
    description,
    id
  ) {
    await this.checkLogin();
    //Wait Until Token Get Updated

    var response = await Axios.put(
      Config.companyApiUrl + "" + id + "/",
      {
        name: name,
        licence_no: licence_no,
        address: address,
        contact_no: contact_no,
        email: email,
        description: description,
      },
      { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
    );

    return response;
  }

    //concent for save company Bank data
    async saveCompanyBankData(bank_account_no,ifsc_no,company_id){
        await this.checkLogin();
        //waite undil token get updated

        var response = await Axios.post(
            Config.companyBankApiUrl, 
            {
                bank_account_no:bank_account_no,
                ifsc_no:ifsc_no,
                company_id:company_id,
                
            },
            {headers:{Authorization: "Bearer "+ AuthHandler.getLoginToken()}});

            return response;
            
    }
//Edit company bank detaisl
    async fetchCompanyBankDetails(id){
        await this.checkLogin();

        var response =  await Axios.get(Config.companyBankApiUrl+""+id+"/",
            {headers:{Authorization: "Bearer "+ AuthHandler.getLoginToken()}});

        return response;    
    }

    //edit the company Bank data
    async editCompanyBankData(bank_account_no, ifsc_no, company_id, id) {
        await this.checkLogin();
        //Wait Until Token Get Updated
    
        var response = await Axios.put(
          Config.companyBankApiUrl + "" + id + "/",
          {
            bank_account_no: bank_account_no,
            ifsc_no: ifsc_no,
            company_id: company_id,
          },
          { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
        );
    
        return response;
      }

      async fetchCompanyOnly(){
        await this.checkLogin();

        var response =  await Axios.get(Config.companyOnly,
            {headers:{Authorization: "Bearer "+ AuthHandler.getLoginToken()}});

        return response;    
    }
    async saveMedicineData(
        name,
        medical_typ,
        buy_price,
        sell_price,
        c_gst,
        s_gst,
        batch_no,
        shelf_no,
        expire_date,
        mfg_date,
        company_id,
        description,
        in_stock_total,
        qty_in_strip,
        medicinedetails
      ) {
        await this.checkLogin();
        //Wait Until Token Get Updated
    
        var response = await Axios.post(
          Config.medicineApiUrl,
          {
            name: name,
            medical_typ: medical_typ,
            buy_price: buy_price,
            sell_price: sell_price,
            c_gst: c_gst,
            s_gst: s_gst,
            batch_no: batch_no,
            shelf_no: shelf_no,
            expire_date: expire_date,
            mfg_date: mfg_date,
            company_id: company_id,
            description: description,
            in_stock_total: in_stock_total,
            qty_in_strip: qty_in_strip,
            medicine_details: medicinedetails,
          },
          { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
        );
    
        return response;
      }
    
      async fetchAllMedicine() {
        await this.checkLogin();
    
        var response = await Axios.get(Config.medicineApiUrl, {
          headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
        });
    
        return response;

    }
}

export default APIHandler;