import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import './Lists.css'
import ServerSidePagination from "./ServerSidePagination";

class Lists extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.page !== prevProps.page) {

        }
    } // end funcS
    render() {
        return (
            <div>
                <ServerSidePagination reportType={this.props.reportType}/>
            </div>
        );
    }
}



Lists.propTypes = {
    page: PropTypes.object.isRequired,


};
const mapStateToProps = state => ({
    page: state.paginated_table.page,
});

const mapDispatchToProps = dispatch => ({


});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lists);