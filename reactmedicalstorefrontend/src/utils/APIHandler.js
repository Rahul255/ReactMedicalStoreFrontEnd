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
    async editCompanyData(name,licence_no,address,contact,email,description,id){
        await this.checkLogin();
        //waite undil token get updated

        var response = await Axios.put(
            Config.companyApiUrl+""+id+"/", 
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
}

export default APIHandler;