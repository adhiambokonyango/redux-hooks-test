import React, {Component} from 'react';
import './PaginatedTable.css'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { recordsPerPage} from "../../store/paginated-table/actions"
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
class Records extends Component {
    constructor(props) {
        super(props);
        this.state = {
         search: "",
            noOfRecords: 9,
            tableData: this.props.data
        };
    }

    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        try {
            if (this.props.data !== prevProps.data) {
                this.setState({ tableData: this.props.data });
            }

            if (this.props.noRecords !== prevProps.noRecords) {
                this.setState({ noOfRecords: parseInt(this.props.noRecords.number)});
            }
        }catch (e) {
            console.log(e)
        }
    }

    recordsInPage = (e) => {
        console.log(e.target.value)
        this.props.recordsPerPage({number: e.target.value})
    }

    search = (e) => {
        let tbody = document.querySelector("tbody");
        let tr = tbody.querySelectorAll("tr");
        const text = e.target.value;
        for(let i=0; i<tr.length; i++){
            const matchText = tr[i].querySelectorAll("td")[0].innerText;
            if(matchText.toLowerCase().indexOf(text.toLowerCase()) > -1){
                tr[i].style.visibility = "visible";
            }else{
                tr[i].style.visibility= "collapse";
            }
        }
    }

    render() {

        return (
            <div className="main " >
                <section className="header">
                    <div className="items-controller">
                        <h5>Show</h5>
                        <select name="" id="itemperpage" onClick={this.recordsInPage}>
                            <option value="09" defaultValue>09</option>
                            <option value="18">18</option>
                            <option value="27">27</option>
                            <option value="36">36</option>
                            <option value="45">45</option>
                        </select>
                        <h5>Per Page</h5>
                    </div>
                    <div className="search">
                        <h5>Search</h5>
                        <input type="text" name="" id="search" placeholder="search" onChange={this.search}/>
                    </div>
                </section>
                <section className="field">
                    <table className="table" >
                        <thead>
                        <TableHeader headerObject={this.props.tableHeaderObject} />
                        </thead>
                        <tbody>
                        {
                            this.state.tableData
                           .map((item, number) => (

                               <TableRow key={number} rowObject={item} />
                        ))
                        }
                        </tbody>
                    </table>
                </section>

            </div>
        );
    }
}

Records.propTypes = {
    page: PropTypes.object.isRequired,
    recordsPerPage: PropTypes.func.isRequired,
    records: PropTypes.array.isRequired,
    noRecords: PropTypes.object.isRequired, // number of records per page


};
const mapStateToProps = state => ({
    page: state.paginated_table.page,
    records: state.paginated_table.records,

    noRecords: state.paginated_table.noRecords
});

const mapDispatchToProps = dispatch => ({
    recordsPerPage: (number) => dispatch(recordsPerPage(number)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Records);