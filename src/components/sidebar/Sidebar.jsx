import React, {Component} from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {FaArrowLeft, FaArrowRight, FaBeer, FaFileCsv, FaGem, FaHeart, FaUser, FaUsers} from 'react-icons/fa';
import Form from "../../views/form/Form";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CamelCase from 'react-camelcase';

import './Sidebar.scss'
import {
    launchUserRegistration,
    sidebarCollapse,
    launchUserReport,
    launchDashboard,
    sidebarOpened,
    launchOffices
} from "../../store/sidebar_management/collapse/actions";

class Sidebar extends Component {
    constructor(props) {

        super(props);

        this.state = {
            collapsed: true,
            full_names:this.props.fullnames
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isCollapsed !== prevProps.isCollapsed) {
         //   console.log(this.props.isCollapsed)
        }
    }

    openSidebar =() =>{
        this.setState({
            collapsed: false
        })
     this.props.sidebarOpened()
    }
    collapseSidebar =() =>{
        this.setState({
            collapsed: true
        })
        this.props.sidebarCollapse()
    }
    openUserReg = () =>{
        this.props.sidebarCollapse()
        this.props.launchUserRegistration()
        this.setState({
            collapsed: this.props.isCollapsed
        })
    }

    openUserReport = () =>{
        this.props.sidebarCollapse()
        this.props.launchUserReport()
        this.setState({
            collapsed: this.props.isCollapsed
        })
    }
    openDashboard = () =>{
        this.props.sidebarCollapse()
        this.props.launchDashboard()
        this.setState({
            collapsed: this.props.isCollapsed
        })
    }
    loadOffices = () =>{
        this.props.sidebarCollapse()
        this.props.launchOffices()
        this.setState({
            collapsed: this.props.isCollapsed
        })
    }


    render() {

        return (
            <ProSidebar collapsed={this.state.collapsed} className="pro">
                {/*https://www.npmjs.com/package/react-pro-sidebar*/}
                <Menu iconShape="square">
                    <MenuItem
                        icon={<FaGem />}
                        onClick={this.openDashboard}
                    >Dashboard</MenuItem>

                    {/*<MenuItem icon={<FaUser />} className="camelCase">*/}
                    {/*     {this.state.full_names}*/}
                    {/*</MenuItem>*/}
                    <MenuItem title="Components"
                              icon={
                        this.state.collapsed?
                        <FaArrowRight onClick={this.openSidebar}/>:
                            <FaArrowLeft onClick={this.collapseSidebar}/>
                    }/>
                    <MenuItem
                        title="Post Offices"
                        icon={<FaFileCsv/>}
                        onClick={this.loadOffices}
                    >Post Offices</MenuItem>

                    <SubMenu title="Users" icon={<FaUsers />}>
                        <MenuItem

                        >
                            Officer
                        </MenuItem>
                        <MenuItem
                            onClick={this.openUserReport}
                        >Storekeeper</MenuItem>
                        <MenuItem>Admin</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        );
    }
}


Sidebar.propTypes = {

    isCollapsed: PropTypes.bool.isRequired,
    sidebarCollapse: PropTypes.func.isRequired,
    sidebarOpened: PropTypes.func.isRequired,
    launchUserRegistration: PropTypes.func.isRequired,
    userRegLaunched: PropTypes.bool.isRequired,

    launchUserReport: PropTypes.func.isRequired,
    userReport: PropTypes.bool.isRequired,
    launchDashboard: PropTypes.func.isRequired,
    dashLaunch: PropTypes.bool.isRequired,

    launchOffices: PropTypes.func.isRequired,
    officeLaunch: PropTypes.bool.isRequired,


};

const mapStateToProps = state => ({
    isCollapsed: state.collapse.isCollapsed,
    userRegLaunched: state.collapse.userRegLaunched,
    userReport: state.collapse.userReport,
    dashLaunch: state.collapse.dashLaunch,
    officeLaunch: state.collapse.officeLaunch,
});

const mapDispatchToProps = dispatch => ({
    sidebarCollapse: () => dispatch(sidebarCollapse()),
    sidebarOpened: () => dispatch(sidebarOpened()),
    launchUserRegistration: () => dispatch(launchUserRegistration()),
    launchUserReport: () => dispatch(launchUserReport()),
    launchDashboard: () => dispatch(launchDashboard()),
    launchOffices: () => dispatch(launchOffices()),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);