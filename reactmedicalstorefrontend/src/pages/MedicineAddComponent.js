import React from 'react';
import { Link } from 'react-router-dom';
import AuthHandler from "../utils/AuthHandler";
import APIHandler from '../utils/APIHandler';

class MedicineAddComponent extends React.Component {

    constructor(props) {
        super(props)
        this.formSubmit = this.formSubmit.bind(this);
    }

    state = {
        errorRes:false,
        errorMessage:"",
        btnMessage:0,
        sendData:false,
        companylist: [],    
        medicinedetails: [{"salt_name":"","salt_qty":"","salt_qty_type":"","description":""}],
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
    componentDidMount(){
        this.LoadCompany();
    }

    async LoadCompany() {
        var apihandler = new APIHandler();
        var companydata = await apihandler.fetchCompanyOnly();
        this.setState({ companylist: companydata.data });
      }

    RemoveItem = () => {
        if (this.state.medicinedetails.length != 1){
            this.state.medicinedetails.pop(this.state.medicinedetails.length - 1);
        }
        this.setState({});
    }

    handleInput = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        console.log(event.target.getAttribute("data-index"));

    }

    AddItem = ()  => {
        var item = {"salt_name":"","salt_qty":"","salt_qty_type":"","description":""};
        this.state.medicinedetails.push(item);
        this.setState({});
    }

    render() {
        return (
            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        <h2>MANAGE Medicine</h2>
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
                                        Add Medicine
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
                                                    placeholder="Enter Name"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Medical Type</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="medical_typ" 
                                                    name="medical_typ" 
                                                    className="form-control" 
                                                    placeholder="Enter Medical Type"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Buy Price</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="buy_price" 
                                                    name="buy_price" 
                                                    className="form-control" 
                                                    placeholder="Enter Buy Price"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Sell Price</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="sell_price" 
                                                    name="sell_price" 
                                                    className="form-control" 
                                                    placeholder="Enter Sell Price"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">C GST</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="c_gst" 
                                                    name="c_gst" 
                                                    className="form-control" 
                                                    placeholder="Enter C GST"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">S GST</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="s_gst" 
                                                    name="s_gst" 
                                                    className="form-control" 
                                                    placeholder="Enter S GST"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Batch Number</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="batch_no" 
                                                    name="batch_no" 
                                                    className="form-control" 
                                                    placeholder="Enter Batch Number"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Shelf Number</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="shelf_no" 
                                                    name="shelf_no" 
                                                    className="form-control" 
                                                    placeholder="Enter Medical Type"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Medical Type</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="medical_typ" 
                                                    name="medical_typ" 
                                                    className="form-control" 
                                                    placeholder="Enter Medical Type"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Expire Date</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="date" 
                                                    id="expire_date" 
                                                    name="expire_date" 
                                                    className="form-control" 
                                                    placeholder="Enter Expire Date"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">MFG Date</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="date" 
                                                    id="mfg_date" 
                                                    name="mfg_date" 
                                                    className="form-control" 
                                                    placeholder="Enter MFG Date"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Description</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="description" 
                                                    name="description" 
                                                    className="form-control" 
                                                    placeholder="Enter Description"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">In Stock Total</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="in_stock_total" 
                                                    name="in_stock_total" 
                                                    className="form-control" 
                                                    placeholder="Enter In Stock Total"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Qty in Strip</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input 
                                                    type="text" 
                                                    id="qty_in_strip" 
                                                    name="qty_in_strip" 
                                                    className="form-control" 
                                                    placeholder="Enter GST in Strip"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">Company</label>
                                        <div className="form-group">
                                            <select className="form-control">
                                                {this.state.companylist.map((item) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.name}
                                                </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-lg-6">
                                                <button 
                                                    className="btn btn-block btn-success" 
                                                    onClick={this.AddItem}
                                                    type="button"
                                                >
                                                    Add Details
                                                </button>
                                            </div>
                                            <div className="col-lg-6">
                                                <button 
                                                className="btn btn-block btn-danger" 
                                                onClick={this.RemoveItem}
                                                type="button"
                                                >
                                                    Remove Details
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.medicinedetails.map(
                                            (item,index) => (
                                            <div className="form-group row">
                                                <div className="col-lg-3">
                                                    <label htmlFor="email_address">Salt Name</label>
                                                    <div className="form-line">
                                                    <input 
                                                        type="text" 
                                                        id="salt_name" 
                                                        name="salt_name" 
                                                        className="form-control" 
                                                        placeholder="Enter Salt Name"
                                                        onChange={this.handleInput}
                                                        data-index={index}
                                                    />
                                                </div>
                                             </div>
                                             <div className="col-lg-3">
                                                    <label htmlFor="email_address">Salt Qty</label>
                                                    <div className="form-line">
                                                    <input 
                                                        type="text" 
                                                        id="salt_qty" 
                                                        name="salt_qty" 
                                                        className="form-control" 
                                                        placeholder="Enter Salt Qty"
                                                        onChange={this.handleInput}
                                                        data-index={index}
                                                    />
                                                </div>
                                             </div>
                                             <div className="col-lg-3">
                                                    <label htmlFor="email_address">Salt Qty Type</label>
                                                    <div className="form-line">
                                                    <input 
                                                        type="text" 
                                                        id="salt_qty_type" 
                                                        name="salt_qty_type" 
                                                        className="form-control" 
                                                        placeholder="Enter Salt Qty Type"
                                                        onChange={this.handleInput}
                                                        data-index={index}
                                                    />
                                                </div>
                                             </div>
                                             <div className="col-lg-3">
                                                    <label htmlFor="email_address">Description</label>
                                                    <div className="form-line">
                                                    <input 
                                                        type="text" 
                                                        id="description" 
                                                        name="description" 
                                                        className="form-control" 
                                                        placeholder="Enter Salt Name"
                                                        onChange={this.handleInput}
                                                        data-index={index}
                                                    />
                                                </div>
                                             </div>
                                            </div>
                                        ))}
                                        <br/>
                                        <button type="submit" 
                                        className="btn btn-primary m-t-15 waves-effect"
                                        disabled={this.state.btnMessage==0?false:true}
                                        >
                                            {this.state.btnMessage==0?"Add Medicine" : "Adding Medicine Bank Please Waite.."}
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

export default MedicineAddComponent;