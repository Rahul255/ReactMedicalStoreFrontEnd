const {default: Axios} = require('axios');
const {default: Config} = require('./Config');
const {default: AuthHandler} = require('./AuthHandler');


class APIHandler {
    async checkLogin() {
        if(AuthHandler.checkTokenExpiry()){
            var response = await Axios.post(Config.refreshApiUrl, {
                refresh: AuthHandler.getrefreshToken(),
            });
            console.log(response);
        }
    }
    async saveCompanyData(name,license_no,address,contact,email,description){
        this.checkLogin();
    }
}

export default APIHandler;