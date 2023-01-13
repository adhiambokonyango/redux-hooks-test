import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {decreaseCount, increaseCount} from "../store/counter/actions";
import FirstView from "./FirstView";
class SecondView extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0,

        }
    }

    add = () =>{
        this.props.increaseCount(this.state.number)
    }

    subtract = () =>{
        this.props.decreaseCount(this.state.number)
    }

    render() {

        return (
            <div>
                <FirstView decreaseCount={this.props.decreaseCount}
                           increaseCount={this.props.increaseCount}
                           />
                {/*<button onClick={this.add}>add</button><br/><br/>*/}
                {/*<button onClick={this.subtract}>subtract</button><br/><br/>*/}

            </div>
        );
    }
}

SecondView.propTypes = {
    number: PropTypes.number.isRequired,
    // increaseCount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    number: state.counter_item.number,
});

const mapDispatchToProps = dispatch => ({
    increaseCount: payload => dispatch(increaseCount(payload)),
    decreaseCount: payload => dispatch(decreaseCount(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SecondView);