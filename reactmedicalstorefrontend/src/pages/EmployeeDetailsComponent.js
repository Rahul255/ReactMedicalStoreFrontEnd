import React from 'react';
import AuthHandler from "../utils/AuthHandler";
import APIHandler from '../utils/APIHandler';

class EmployeeDetailsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.formSubmit = this.formSubmit.bind(this);
        console.log(this.props.match.params.id);
    }

    state = {
        errorRes:false,
        errorMessage:"",
        btnMessage:0,
        sendData:false,
        employeeList:[],
        dataLoaded:false,
        name: "",
        joinig_date: "",
        phone: "",
        address: "",
        employeeSalaryList:[],
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
    async updateDataAgain(){
        var apiHandler = new APIHandler();
        var employeeData =await apiHandler.fetchEmployeeByID(this.props.match.params.id);
        this.setState({name: employeeData.data.data.name});
        this.setState({joinig_date: employeeData.data.data.joinig_date});
        this.setState({phone: employeeData.data.data.phone});
        this.setState({address: employeeData.data.data.address});
        //this.setState({employeeList: employeeDataList.data.data})
        //this.setState({dataLoaded: true});
    }
    viewCompanyDetails = (company_id) => {
        console.log(company_id);
        console.log(this.props);
        this.props.history.push("/companydetails/"+company_id);
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
                                        All Employee Salary
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
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.employeeSalaryList.map((salary) =>(
                                                <tr key={salary.id}>
                                                    <td>{salary.id}</td>
                                                    <td>{salary.salary_date}</td>
                                                    <td>{salary.salary_amount}</td>
                                                    <td>{new Date(salary.added_on).toLocaleString()}</td>
                                                    <td><button className="btn btn-primary">View</button></td>
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