import React, {Component} from 'react';
import PropTypes from "prop-types";
class TableRow extends Component {
    state = { columns: [], rowObject: this.props.rowObject};

    componentDidMount() {
        this.prepareRow();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.rowObject !== prevProps.rowObject) {
           await this.setState({ rowObject: this.props.rowObject });
            this.prepareRow();
        }

    }

    prepareRow = ()=> {
        var columns = [];
        for (var x in this.state.rowObject) {
            columns.push(<td>{this.state.rowObject[x]}</td>);
        }

        this.setState({columns});
    };
    render() {
        return (
            <tr>{this.state.columns}</tr>
        );
    }
}
TableRow.propTypes = {
    rowObject: PropTypes.object.isRequired
};
export default TableRow;