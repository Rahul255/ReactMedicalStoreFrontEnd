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
        name: "",
        licence_no: "",
        address: "",
        contact: "",
        email: "",
        description:"",
        dataLoaded: false,
    }

    async formSubmit(event){
        event.preventDefault();
        this.setState({btnMessage:1})
        
        var apiHandler = new APIHandler();
        var response =await apiHandler.editCompanyData(
            event.target.name.value,
            event.target.licence_no.value,
            event.target.address.value,
            event.target.contact.value,
            event.target.email.value,
            event.target.description.value,
            this.props.match.params.id
            );
        console.log(response);
        this.setState({btnMessage:0})
        this.setState({errorRes:response.data.error})
        this.setState({errorMessage:response.data.message})
        this.setState({sendData:true})
    };
    //This method is work when our page is ready
    componentDidMount() {
        this.fetchCompanyData();
    }
    async fetchCompanyData(){
        var apiHandler = new APIHandler();
        var companydata =await apiHandler.fetchCompanyDetails(this.props.match.params.id);
        console.log(companydata);
        this.setState({ companyBank: companydata.data.data.company_bank });
        this.setState({ name: companydata.data.data.name});
        this.setState({ licence_no: companydata.data.data.licence_no});
        this.setState({ address: companydata.data.data.address});
        this.setState({ contact: companydata.data.data.contact});
        this.setState({ email: companydata.data.data.email});
        this.setState({ description: companydata.data.data.description});
        this.setState({ dataLoaded: true});
        //this.setState({companyDataList: companydata.data.data});
    }
    viewCompanyDetails = (company_id) => {
        console.log(company_id);
        console.log(this.props);
    }

    AddCompanyBank=()=>{
        this.props.history.push("/addCompanyBank/" + this.props.match.params.id);
    }
    EditCompanyBank = (company_bank_id) => {
        console.log(company_bank_id);
        this.props.history.push("/editcompanybank/" + this.props.match.params.id+"/"+company_bank_id);
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
                                        Edit Company
                                    </h2>
                                </div>
                                <div className="body">
                                    <form onSubmit={this.formSubmit}>
                                        <label htmlFor="email_address">Name</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="name" 
                                                    name="name" 
                                                    className="form-control" 
                                                    placeholder="Enter Company Name"
                                                    defaultValue = {this.state.name}
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Licence No</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="licence_no" 
                                                    name="licence_no" 
                                                    className="form-control" 
                                                    placeholder="Enter Licence No"
                                                    defaultValue = {this.state.licence_no}
                                                />
                                            </div>
                                        </div>
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
                                        <label htmlFor="email_address">Contact</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="contact" 
                                                    name="contact" 
                                                    className="form-control" 
                                                    placeholder="Enter Contact"
                                                    defaultValue = {this.state.contact}
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Email</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="email" 
                                                    name="email" 
                                                    className="form-control" 
                                                    placeholder="Enter Email"
                                                    defaultValue = {this.state.email}
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Description</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="description" 
                                                    name="discription" 
                                                    className="form-control" 
                                                    placeholder="Enter Description"
                                                    defaultValue = {this.state.description}
                                                />
                                            </div>
                                        </div>
                                        <br/>
                                        <button type="submit" 
                                        className="btn btn-primary m-t-15 waves-effect"
                                        disabled={this.state.btnMessage==0?false:true}
                                        >
                                            {this.state.btnMessage==0?"Edit Company" : "Editing Company Please Waite.."}
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
                                        Company Bank
                                    </h2>
                                    <div className="header-dropdown m-r--5">
                                        <button className="btn btn-info"
                                        onClick={this.AddCompanyBank}
                                        >
                                            Add Company
                                        </button>
                                    </div>
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
                                                        <button 
                                                        className="btn btn-block btn-warning" 
                                                        onClick={() =>this.EditCompanyBank(company.id)}
                                                        >
                                                            Edit
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-block btn-danger" >Delete</button>
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