import React from 'react';
import APIHandler from '../utils/APIHandler';

class HomeComponent extends React.Component {
    state={
        customer_request:0,
    }
    //This method is work when our page is ready
    componentDidMount() {
        this.fetchHomePage();
    }
    async fetchHomePage(){
        var apiHandler = new APIHandler();
        var homedata =await apiHandler.fetchHomePage();
        console.log(homedata);
        this.setState({customer_request: homedata.data.customer_request});
        //this.setState({companyDataList: companydata.data.data});
        //this.setState({dataLoaded: true});
    }
    render() {
        return (
            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        <h2>DASHBOARD</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-pink hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">bookmark</i>
                                </div>
                                <div className="content">
                                    <div className="text">TOTAL REQUEST</div>
                                    <div className="number count-to" data-from="0" data-to="125" data-speed="15" data-fresh-interval="20">{this.state.customer_request}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-cyan hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">help</i>
                                </div>
                                <div className="content">
                                    <div className="text">TOTAL SALES</div>
                                    <div className="number count-to" data-from="0" data-to="257" data-speed="1000" data-fresh-interval="20">257</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-light-green hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">forum</i>
                                </div>
                                <div className="content">
                                    <div className="text">TOTAL MEDICINE</div>
                                    <div className="number count-to" data-from="0" data-to="243" data-speed="1000" data-fresh-interval="20">243</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-orange hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">person_add</i>
                                </div>
                                <div className="content">
                                    <div className="text">TOTAL COMPANY</div>
                                    <div className="number count-to" data-from="0" data-to="1225" data-speed="1000" data-fresh-interval="20">1225</div>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-pink hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">playlist_add_check</i>
                                </div>
                                <div className="content">
                                    <div className="text">TOTAL EMPLOYEE</div>
                                    <div className="number count-to" data-from="0" data-to="125" data-speed="15" data-fresh-interval="20">125</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-cyan hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">help</i>
                                </div>
                                <div className="content">
                                    <div className="text">TOTAL PROFIT</div>
                                    <div className="number count-to" data-from="0" data-to="257" data-speed="1000" data-fresh-interval="20">257</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-light-green hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">forum</i>
                                </div>
                                <div className="content">
                                    <div className="text">TOTAL SALES AMOUNT</div>
                                    <div className="number count-to" data-from="0" data-to="243" data-speed="1000" data-fresh-interval="20">243</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-orange hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">person_add</i>
                                </div>
                                <div className="content">
                                    <div className="text">MEDICINE EXPIRE IN WEEK </div>
                                    <div className="number count-to" data-from="0" data-to="1225" data-speed="1000" data-fresh-interval="20">1225</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-pink hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">playlist_add_check</i>
                                </div>
                                <div className="content">
                                    <div className="text">COMPLETED REQUEST</div>
                                    <div className="number count-to" data-from="0" data-to="125" data-speed="15" data-fresh-interval="20">125</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-cyan hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">help</i>
                                </div>
                                <div className="content">
                                    <div className="text">PENDING REQUEST</div>
                                    <div className="number count-to" data-from="0" data-to="257" data-speed="1000" data-fresh-interval="20">257</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-light-green hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">forum</i>
                                </div>
                                <div className="content">
                                    <div className="text">TODAY SALES AMOUNT</div>
                                    <div className="number count-to" data-from="0" data-to="243" data-speed="1000" data-fresh-interval="20">243</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box bg-orange hover-expand-effect">
                                <div className="icon">
                                    <i className="material-icons">person_add</i>
                                </div>
                                <div className="content">
                                    <div className="text">TODAY SALES PROFIT</div>
                                    <div className="number count-to" data-from="0" data-to="1225" data-speed="1000" data-fresh-interval="20">1225</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        )
    }
}

export default HomeComponent;