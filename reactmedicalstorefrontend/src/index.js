import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Login from './pages/Login';
import MainComponent from './components/MainComponent';
import {PrivateRoute} from './utils/PrivateRoute';
import {PrivateRouteNew} from './utils/PrivateRouteNew';
import CompanyComponent from './pages/CompanyComponent';
import CompanyAddBankComponent from './pages/CompanyAddBankComponent';
import CompanyDetailsComponent from './pages/CompanyDetailsComponent';
import CompanyEditBankComponent from './pages/CompanyEditBankComponent';
import MedicineAddComponent from './pages/MedicineAddComponent';
import MedicineManageComponent from './pages/MedicineManageComponent';
import EmployeeComponent from './pages/EmployeeComponent';
import EmployeeDetailsComponent from './pages/EmployeeDetailsComponent';
import HomeComponent from './pages/HomeComponent';
import LogoutComponent from './pages/LogoutComponent';
import Config from './utils/Config';
import CompanyAccountComponent from './pages/CompanyAccountComponent';
import BillGenerateComponent from './pages/BillGenerateComponent';


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path={Config.logoutPageUrl} component={LogoutComponent}></Route>
            <PrivateRouteNew exact path="/home" activepage="0" page={HomeComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/company" activepage="1" page={CompanyComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/companydetails/:id" activepage="1" page={CompanyDetailsComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/addCompanyBank/:id" activepage="1" page={CompanyAddBankComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/editcompanybank/:company_id/:id" activepage="1" page={CompanyEditBankComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/addMedicine" activepage="2" page={MedicineAddComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/manageMedicine" activepage="3" page={MedicineManageComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/manageCompanyAccount" activepage="4" page={CompanyAccountComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/employeeManage" activepage="5" page={EmployeeComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/employeedetails/:id" activepage="5" page={EmployeeDetailsComponent}></PrivateRouteNew>
            <PrivateRouteNew exact path="/generateBill" activepage="6" page={BillGenerateComponent}></PrivateRouteNew>
        </Switch>
    </Router>
    , document.getElementById("root"))