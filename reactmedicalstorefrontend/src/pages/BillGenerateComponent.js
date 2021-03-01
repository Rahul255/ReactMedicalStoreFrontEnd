import React from 'react';
import { Link } from 'react-router-dom';
import AuthHandler from "../utils/AuthHandler";
import APIHandler from '../utils/APIHandler';

class BillGenerateComponent extends React.Component {

    constructor(props) {
        super(props)
        this.formSubmit = this.formSubmit.bind(this);
    }

    state = {
        errorRes:false,
        errorMessage:"",
        btnMessage:0,
        sendData:false,
    }

    async formSubmit(event){
        event.preventDefault();
        this.setState({btnMessage:1})
        
        var apiHandler = new APIHandler();
        var response =await apiHandler.saveCompanyBankData(
            event.target.bank_account_no.value,
            event.target.ifsc_no.value,
            this.props.match.params.id,
            );
        console.log(response);
        this.setState({btnMessage:0})
        this.setState({errorRes:response.data.error})
        this.setState({errorMessage:response.data.message})
        this.setState({sendData:true})
    }

    render() {
        return (
            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        <h2>GENERATE BILL</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className="header">
                                {this.state.dataLoaded == false?(
                                    <div className="text-center">
                                        <div class="preloader pl-size-xl">
                                                    <div class="spinner-layer">
                                                        <div class="circle-clipper left">
                                                            <div class="circle"></div>
                                                        </div>
                                                        <div class="circle-clipper right">
                                                            <div class="circle"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                    </div>):""}
                                    <h2>
                                        Generate Bill for customer
                                    </h2>
                                </div>
                                <div className="body">
                                    <form onSubmit={this.formSubmit}>
                                        <div className="row">
                                        <div className="col-lg-6">
                                        <label htmlFor="email_address">Customer Name :</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="customer_name" 
                                                    name="customer_name" 
                                                    className="form-control" 
                                                    placeholder="Enter Customer name"
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <label htmlFor="email_address">Address :</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="address" 
                                                    name="address" 
                                                    className="form-control" 
                                                    placeholder="Enter customer address"
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
                                                    placeholder="Enter Customer Phone"
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <label htmlFor="email_address">Bill ID</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="bill_id" 
                                                    name="bill_id" 
                                                    className="form-control" 
                                                    placeholder="Enter Bill ID"
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        <br/>
                                        <h4>Medicine Details</h4>
                                        <div className="row">
                                        <div className="col-lg-2">
                                        <label htmlFor="email_address">SR No.</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="sr_no" 
                                                    name="sr_no" 
                                                    className="form-control" 
                                                    placeholder="Enter SR No."
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-2">
                                        <label htmlFor="email_address">Medicine Name</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="medicine_name" 
                                                    name="medicine_name" 
                                                    className="form-control" 
                                                    placeholder="Enter Medicine Name"
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-2">
                                        <label htmlFor="email_address">Qty</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="qty" 
                                                    name="qty" 
                                                    className="form-control" 
                                                    placeholder="Enter Qty"
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-2">
                                        <label htmlFor="email_address">Qty Type</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="qty_type" 
                                                    name="qty_type" 
                                                    className="form-control" 
                                                    placeholder="Enter Qty"
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-2">
                                        <label htmlFor="email_address">Unit Price</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="unit_price" 
                                                    name="unit_price" 
                                                    className="form-control" 
                                                    placeholder="Enter Unit Price"
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-2">
                                        <label htmlFor="email_address">Amount</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="amount" 
                                                    name="amount" 
                                                    className="form-control" 
                                                    placeholder="Enter Amount"
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        <button type="submit" 
                                        className="btn btn-primary m-t-15 waves-effect"
                                        disabled={this.state.btnMessage==0?false:true}
                                        >
                                            {this.state.btnMessage==0?"Generate Bill" : "Generate Bill Please Waite.."}
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
                </div>
            </section>
        )
    }
}

export default BillGenerateComponent;