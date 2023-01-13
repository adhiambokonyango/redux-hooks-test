import React, {Component} from 'react';
import {BiSearch} from "react-icons/bi";
import {FaBell, FaChevronDown} from "react-icons/fa";
import "./TopContainer.css";

import {getCurrentDate} from '../date_component/date-component'

class TopContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial: this.props.full_names ? this.props.full_names[0]: "P",
             current_date: getCurrentDate(),
            full_names:this.props.full_names,
            title: this.props.title? this.props.title:"Title"

        };
    }



    render() {
        return (
            <div className="top-bar" >
                <div className="title">
                    <h1>
                        {this.state.title}
                    </h1>
                </div>
                <div className="right-content">
                    <div className="res-circle">
                        <div className="circle-txt">{this.state.initial}</div>
                    </div>
                    <p className="date-time">
                        {this.state.full_names}
                        <br/>
                        {this.state.current_date}
                    </p>
                </div>
            </div>
        );
    }
}

export default TopContainer;