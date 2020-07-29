import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends React.Component{
    render(){
        return (
            <div className="BusinessList">
                {this.props.businesses.map(el => <Business business = {el} key={el.id}/>)}
            </div>
        );
    }
}

export default BusinessList;