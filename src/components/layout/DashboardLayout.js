import React, {Component} from 'react';
import './DashboardLayout.css'
import CircularBar from "../data_component/CircularBar";
import ItemCounter from "../item_counter/ItemCounter";
import BarChart from "../data_component/BarChart";
import LineChart from "../data_component/LineChart";
class DashboardLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            full_names:this.props.fullnames,

        };
    }

    render() {
        return (
            <div className="dashboard-container">
                <div className="large-content">
                    <div className="data-section">
                        <div className="counter-section">
                            <div className="counter-one counter">
                                <h6>Equipment Name</h6>
                                <ItemCounter/>
                            </div>
                            <div className="counter-two counter">
                                <h6>Equipment Name</h6>
                                <ItemCounter/>
                            </div>
                            <div className="counter-three counter">
                                <h6>Equipment Name</h6>
                                <ItemCounter/>
                            </div>
                            <div className="counter-four counter">
                                <h6>Equipment Name</h6>
                                <ItemCounter/>
                            </div>
                        </div>
                        <div className="progress-section">
                            <div className="bar">
                                <h6>Equipment Name</h6>
                                <CircularBar/>
                            </div>
                            <div className="second-bar">
                                <h6>Equipment Name</h6>
                                <CircularBar/>
                            </div>
                            <div className="third-bar">
                                <h6>Equipment Name</h6>
                                <CircularBar/>
                            </div>
                            <div className="fourth-bar">
                                <h6>Equipment Name</h6>
                                <CircularBar/>
                            </div>
                        </div>
                        <div className="chart-section">
                            <div className="department-data">
                                <h6>Data on Equipments in every Department</h6>
                                <BarChart type="bar"/>
                            </div>
                            <div className="contract-data">
                                <h6>Data on Equipments in every Department</h6>
                                <LineChart type="line"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-right">1b</div>
            </div>
        );
    }
}

export default DashboardLayout;

   /*<div className="header">header</div>*/

