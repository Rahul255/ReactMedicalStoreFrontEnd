import React from 'react';
import AuthHandler from "../utils/AuthHandler";
import APIHandler from '../utils/APIHandler';

class EmployeeDetailsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.formSubmit = this.formSubmit.bind(this);
        this.formSubmitSalary = this.formSubmitSalary.bind(this);
        this.formSubmitBank = this.formSubmitBank.bind(this);
        console.log(this.props.match.params.id);
    }

    state = {
        errorRes:false,
        errorResSalary:false,
        errorResBank:false,
        errorMessage:"",
        errorMessageSalary:"",
        errorMessageBank:"",
        btnMessage:0,
        btnMessageSalary:0,
        btnMessageBank:0,
        sendData:false,
        sendDataSalary:false,
        sendDataBank:false,
        employeeList:[],
        dataLoaded:false,
        name: "",
        joinig_date: "",
        phone: "",
        address: "",
        employeeSalaryList:[],
        employeebankList:[],
    }

    async formSubmit(event){
        event.preventDefault();
        this.setState({btnMessage:1})
        
        var apiHandler = new APIHandler();
        var response =await apiHandler.editEmployeeData(
            event.target.name.value,
            event.target.joinig_date.value,
            event.target.phone.value,
            event.target.address.value,
            this.props.match.params.id
            );
        console.log(response);
        this.setState({btnMessage:0})
        this.setState({errorRes:response.data.error})
        this.setState({errorMessage:response.data.message})
        this.setState({sendData:true})
        this.updateDataAgain();
    }
    //This method is work when our page is ready
    componentDidMount() {
        this.fetchEmployeeDataByID();
    }
    async fetchEmployeeDataByID(){
        this.updateDataAgain();
    }

    async formSubmitSalary(event){
        event.preventDefault();
        this.setState({btnMessageSalary:1})
        
        var apiHandler = new APIHandler();
        var response =await apiHandler.addEmployeeSalaryData(
            event.target.salary_date.value,
            event.target.salary_amount.value,
            this.props.match.params.id
            );
        console.log(response);
        this.setState({btnMessageSalary:0})
        this.setState({errorResSalary:response.data.error})
        this.setState({errorMessageSalary:response.data.message})
        this.setState({sendDataSalary:true})
        this.updateDataAgain();
        console.log("Save employee salary")
    }

    async updateDataAgain(){
        var apiHandler = new APIHandler();
        //call API
        var employeeData =await apiHandler.fetchEmployeeByID(this.props.match.params.id);
        var employeeSalary = await apiHandler.fetchSalaryEmployee(this.props.match.params.id);
        var employeeBank = await apiHandler.fetchBankEmployee(this.props.match.params.id);


        
        console.log(employeeSalary);
        this.setState({name: employeeData.data.data.name});
        this.setState({joinig_date: employeeData.data.data.joinig_date});
        this.setState({phone: employeeData.data.data.phone});
        this.setState({address: employeeData.data.data.address});
        this.setState({employeeSalaryList: employeeSalary.data});
        this.setState({employeebankList: employeeBank.data});
        //this.setState({employeeList: employeeDataList.data.data})
        this.setState({dataLoaded: true});
    }
    viewCompanyDetails = (company_id) => {
        console.log(company_id);
        console.log(this.props);
        this.props.history.push("/companydetails/"+company_id);
    }

    async formSubmitBank (event) {
        event.preventDefault();
        this.setState({btnMessageBank:1})
        
        var apiHandler = new APIHandler();
        var response =await apiHandler.addEmployeeBankData(
            event.target.bank_account_no.value,
            event.target.ifsc_no.value,
            this.props.match.params.id
            );
        console.log(response);
        this.setState({btnMessageBank:0})
        this.setState({errorResBank:response.data.error})
        this.setState({errorMessageBank:response.data.message})
        this.setState({sendDataBank:true})
        this.updateDataAgain();
        console.log("Save employee salary")
    }

    render() {
        return (
            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        <h2>EDIT EMPLOYEE #{this.props.match.params.id}</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className="header">
                                {this.state.dataLoaded == false?(
                                    <div className="text-center">
                                        <div className="preloader pl-size-xl">
                                                    <div className="spinner-layer">
                                                        <div className="circle-clipper left">
                                                            <div className="circle"></div>
                                                        </div>
                                                        <div className="circle-clipper right">
                                                            <div className="circle"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                    </div>):""}
                                    <h2>
                                        Edit Employee
                                    </h2>
                                </div>
                                <div className="body">
                                    <form onSubmit={this.formSubmit}>
                                        <div className="row">
                                        <div className="col-lg-6">
                                        <label htmlFor="email_address">Name</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                type="text" 
                                                id="name" 
                                                name="name" 
                                                className="form-control" 
                                                placeholder="Enter Name"
                                                defaultValue = {this.state.name}
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <label htmlFor="email_address"> Joining Date</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                type="date" 
                                                id="joinig_date" 
                                                name="joinig_date" 
                                                className="form-control" 
                                                placeholder="Enter Joining date"
                                                defaultValue = {this.state.joinig_date}
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-lg-6">
                                        <label htmlFor="email_address">Phone</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                type="text" 
                                                id="phone" 
                                                name="phone" 
                                                className="form-control" 
                                                placeholder="Enter Phone"
                                                defaultValue = {this.state.phone}
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <label htmlFor="email_address">Address</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                type="text" 
                                                id="address" 
                                                name="address" 
                                                className="form-control" 
                                                placeholder="Enter Address"
                                                defaultValue = {this.state.address}
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        <br/>
                                        <button type="submit" 
                                        className="btn btn-primary m-t-15 waves-effect"
                                        disabled={this.state.btnMessage==0?false:true}
                                        >
                                            {this.state.btnMessage==0?"Edit Employee" : "Editing Employee Please Waite.."}
                                        </button>
                                        <br/>
                                        {this.state.errorRes==false && this.state.sendData==true?(
                                            <div className="alert alert-success">
                                                <strong>Success</strong> {this.state.errorMessage}.
                                            </div>
                                            ):""
                                        }
                                        {this.state.errorRes==true && this.state.sendData==true?(
                                            <div className="alert alert-danger">
                                                <strong>Failed!</strong> {this.state.errorMessage}.
                                            </div>
                                            ):""
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className="header">
                                {this.state.dataLoaded == false?(
                                    <div className="text-center">
                                        <div className="preloader pl-size-xl">
                                                    <div className="spinner-layer">
                                                        <div className="circle-clipper left">
                                                            <div className="circle"></div>
                                                        </div>
                                                        <div className="circle-clipper right">
                                                            <div className="circle"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                    </div>):""}
                                    <h2>
                                       Add Employee Salary
                                    </h2>
                                </div>
                                <div className="body">
                                    <form onSubmit={this.formSubmitSalary}>
                                        <div className="row">
                                        <div className="col-lg-6">
                                        <label htmlFor="email_address">Salary Date</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                type="date" 
                                                id="salary_date" 
                                                name="salary_date" 
                                                className="form-control" 
                                                placeholder="Enter Salary Date"
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <label htmlFor="email_address"> Salary Amount</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                type="text" 
                                                id="salary_amount" 
                                                name="salary_amount" 
                                                className="form-control" 
                                                placeholder="Enter Joining Amount"
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        <br/>
                                        <button type="submit" 
                                        className="btn btn-primary m-t-15 waves-effect"
                                        disabled={this.state.btnMessageSalary==0?false:true}
                                        >
                                            {this.state.btnMessageSalary==0?"Add Employee Salary" : "Adding Employee Salary Please Waite.."}
                                        </button>
                                        <br/>
                                        {this.state.errorResSalary==false && this.state.sendDataSalary==true?(
                                            <div className="alert alert-success">
                                                <strong>Success</strong> {this.state.errorMessageSalary}.
                                            </div>
                                            ):""
                                        }
                                        {this.state.errorResSalary==true && this.state.sendDataSalary==true?(
                                            <div className="alert alert-danger">
                                                <strong>Failed!</strong> {this.state.errorMessageSalary}.
                                            </div>
                                            ):""
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className="header">
                                    {this.state.dataLoaded == false?(
                                    <div className="text-center">
                                        <div className="preloader pl-size-xl">
                                                    <div className="spinner-layer">
                                                        <div className="circle-clipper left">
                                                            <div className="circle"></div>
                                                        </div>
                                                        <div className="circle-clipper right">
                                                            <div className="circle"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                    </div>):""}
                                    <h2>
                                       Employee Salary
                                    </h2>
                                </div>
                                <div className="body table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#ID</th>
                                                <th>Salary Date</th>
                                                <th>Salary Amount</th>
                                                <th>Added On</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.employeeSalaryList.map((salary) =>(
                                                <tr key={salary.id}>
                                                    <td>{salary.id}</td>
                                                    <td>{salary.salary_date}</td>
                                                    <td>{salary.salary_amount}</td>
                                                    <td>{new Date(salary.added_on).toLocaleString()}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className="header">
                                {this.state.dataLoaded == false?(
                                    <div className="text-center">
                                        <div className="preloader pl-size-xl">
                                                    <div className="spinner-layer">
                                                        <div className="circle-clipper left">
                                                            <div className="circle"></div>
                                                        </div>
                                                        <div className="circle-clipper right">
                                                            <div className="circle"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                    </div>):""}
                                    <h2>
                                       Add Employee Bank
                                    </h2>
                                </div>
                                <div className="body">
                                    <form onSubmit={this.formSubmitBank}>
                                        <div className="row">
                                        <div className="col-lg-6">
                                        <label htmlFor="email_address">Employee Account No.</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                type="text" 
                                                id="bank_account_no" 
                                                name="bank_account_no" 
                                                className="form-control" 
                                                placeholder="Enter Employee account no"
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <label htmlFor="email_address"> Employee IFSC Code</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                type="text" 
                                                id="ifsc_no" 
                                                name="ifsc_no" 
                                                className="form-control" 
                                                placeholder="Enter Employee IFSC code"
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        <br/>
                                        <button type="submit" 
                                        className="btn btn-primary m-t-15 waves-effect"
                                        disabled={this.state.btnMessageBank==0?false:true}
                                        >
                                            {this.state.btnMessageBank==0?"Add Employee Bank" : "Adding Employee Bank Please Waite.."}
                                        </button>
                                        <br/>
                                        {this.state.errorResBank==false && this.state.sendDataBank==true?(
                                            <div className="alert alert-success">
                                                <strong>Success</strong> {this.state.errorMessageBank}.
                                            </div>
                                            ):""
                                        }
                                        {this.state.errorResBank==true && this.state.sendDataBank==true?(
                                            <div className="alert alert-danger">
                                                <strong>Failed!</strong> {this.state.errorMessageBank}.
                                            </div>
                                            ):""
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className="header">
                                    {this.state.dataLoaded == false?(
                                    <div className="text-center">
                                        <div className="preloader pl-size-xl">
                                                    <div className="spinner-layer">
                                                        <div className="circle-clipper left">
                                                            <div className="circle"></div>
                                                        </div>
                                                        <div className="circle-clipper right">
                                                            <div className="circle"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                    </div>):""}
                                    <h2>
                                       Employee Bank
                                    </h2>
                                </div>
                                <div className="body table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#ID</th>
                                                <th>Employee Bank</th>
                                                <th>Employee IFSC Code</th>
                                                <th>Added On</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.employeebankList.map((bankdetails) =>(
                                                <tr key={bankdetails.id}>
                                                    <td>{bankdetails.id}</td>
                                                    <td>{bankdetails.bank_account_no}</td>
                                                    <td>{bankdetails.ifsc_no}</td>
                                                    <td>{new Date(bankdetails.added_on).toLocaleString()}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        )
    }
}

export default EmployeeDetailsComponent;