import React from 'react';
import AuthHandler from "../utils/AuthHandler"

class CompanyComponent extends React.Component {

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
                                    <form>
                                        <label htmlFor="email_address">Name</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input type="text" id="name" name="name" className="form-control" placeholder="Enter Company Name"/>
                                            </div>
                                        </div>
                                        <label htmlFor="email_address">License No</label>
                                        <div className="form-group">
                                            <div className="form-line">
                                                <input type="text" id="license_no" name="license_no" className="form-control" placeholder="Enter License No"/>
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
                                        <button type="button" className="btn btn-primary m-t-15 waves-effect">Add Company</button>
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

export default CompanyComponent;