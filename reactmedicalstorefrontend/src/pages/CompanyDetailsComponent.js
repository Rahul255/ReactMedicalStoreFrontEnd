import React from 'react';
import AuthHandler from "../utils/AuthHandler";
import APIHandler from '../utils/APIHandler';

class CompanyDetailsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.formSubmit = this.formSubmit.bind(this);
        console.log(props.match.params.id);
    }

    state = {
        errorRes:false,
        errorMessage:"",
        btnMessage:0,
        sendData:false,
        companyBank:[],
    }

    async formSubmit(event){
        event.preventDefault();
        this.setState({btnMessage:1})
        
        var apiHandler = new APIHandler();
        var response =await apiHandler.saveCompanyData(
            event.target.name.value,
            event.target.licence_no.value,
            event.target.address.value,
            event.target.contact.value,
            event.target.email.value,
            event.target.description.value
            );
        console.log(response);
        this.setState({btnMessage:0})
        this.setState({errorRes:response.data.error})
        this.setState({errorMessage:response.data.message})
        this.setState({sendData:true})
    }
    //This method is work when our page is ready
    componentDidMount() {
        this.fetchCompanyData();
    }
    async fetchCompanyData(){
        var apiHandler = new APIHandler();
        var companydata =await apiHandler.fetchCompanyDetails(this.props.match.params.id);
        console.log(companydata);
        this.setState({ companyBank: companydata.data.data.company_bank });
        //this.setState({companyDataList: companydata.data.data});
    }
    viewCompanyDetails = (company_id) => {
        console.log(company_id);
        console.log(this.props);
    }

    render() {
        return (
            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        <h2>MANAGE COMPANY</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className="header">
                                    <h2>
                                        Add Company
                                    </h2>
                                </div>
                                <div className="body">
                                    <form onSubmit={this.formSubmit}>
                                        <label htmlFor="email_address">Name</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input type="text" id="name" name="name" className="form-control" placeholder="Enter Company Name"/>
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Licence No</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input type="text" id="licence_no" name="licence_no" className="form-control" placeholder="Enter Licence No"/>
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Address</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input type="text" id="address" name="address" className="form-control" placeholder="Enter Address"/>
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Contact</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input type="text" id="contact" name="contact" className="form-control" placeholder="Enter Contact"/>
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Email</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input type="text" id="email" name="email" className="form-control" placeholder="Enter Email"/>
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Description</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input type="text" id="description" name="discription" className="form-control" placeholder="Enter Description"/>
                                            </div>
                                        </div>
                                        <br/>
                                        <button type="submit" 
                                        className="btn btn-primary m-t-15 waves-effect"
                                        disabled={this.state.btnMessage==0?false:true}
                                        >
                                            {this.state.btnMessage==0?"Add Company" : "Adding Company Please Waite.."}
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
                                    <h2>
                                        All Companies
                                    </h2>
                                </div>
                                <div className="body table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#ID</th>
                                                <th>Account Number</th>
                                                <th>IFSC Code</th>
                                                <th>Added On</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.companyBank.map((company) =>(
                                                <tr key={company.id}>
                                                    <td>{company.id}</td>
                                                    <td>{company.bank_account_no}</td>
                                                    <td>{company.ifsc_no}</td>
                                                    <td>{new Date(company.added_on).toLocaleString()}</td>
                                                    <td>
                                                        <button className="btn btn-block btn-warning" >Delete</button>
                                                    </td>
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

export default CompanyDetailsComponent;