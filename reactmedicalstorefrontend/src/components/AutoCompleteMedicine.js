import React from 'react';

class AutoCompleteMedicine extends React.Component {
    state={
        onFocus: false
    }
    onFocusChange = () => {
        this.setState({onFocus:true});
    }
    onBlurChange = () => {
        this.setState({onFocus:false});
    }
    render() {
        return (
            <React.Fragment>
                <input 
                    type="text" 
                    id="medicine_name" 
                    name="medicine_name" 
                    className="form-control" 
                    placeholder="Enter Medicine Name"
                    onFocus={this.onFocusChange}
                    onBlur={this.onBlurChange}
                /> 
                {this.stat.onFocus == true ?
                <div>
                    <ul style={{
                        listStyle:"none",
                        margin:0,
                        padding:0,
                        border:"1px solid lightgrey",
                        boxShadow:"1px 1px 1px lightgrey",
                        position:"absolute",
                        width:"100%",
                        zIndex:1,
                        background:"white",
                        }}>
                        <li style={{padding:5,borderBottom:"1px solid lightgrey"}}>ABC</li>
                        <li style={{padding:5,borderBottom:"1px solid lightgrey"}}>ABC</li>
                    </ul>
                </div> 
                :""}                                                                             
            </React.Fragment>
        )
    }
}

export default AutoCompleteMedicine;