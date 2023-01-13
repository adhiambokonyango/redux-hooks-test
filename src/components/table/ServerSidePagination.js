import React, {Component} from 'react';
import Records from "./Records";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {fetchRecords, paginatedRecords} from "../../store/paginated-table/actions";
import {connect} from "react-redux";


class ServerSidePagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pager: {},
            pageOfItems: [],
            selectPage: 1,
            tableHeaders: {},

            noOfRecords: this.props.noRecords? this.props.noRecords.number: 9,
        };
    }
    componentDidMount() {
        try {
            if (this.props.reportType === "postOffices"){
                this.props.paginatedRecords( `/versions/paginated/offices?page=${this.state.selectPage}`)
            }
        }catch (e) {
            console.log(e)
        }

    }
     componentDidUpdate(prevProps, prevState, snapshot) {
        try {
            if (prevProps.paginated !== this.props.paginated){
                this.setState({
                    pager: this.props.paginated.pager,
                    pageOfItems: this.props.paginated.pageOfItems,
                    tableHeaders: this.props.paginated.tableHeaders
                });
            }

            if (this.props.noRecords !== prevProps.noRecords) {
                this.setState({ noOfRecords: parseInt(this.props.noRecords.number)});

            }
        }catch (e) {
            console.log(e)
        }
    }

    firstPage = async () =>{
        await this.setState({
            selectPage: 1
        })
        this.props.paginatedRecords(`/versions/paginated/offices?page=${this.state.selectPage}`)
    }

    setCurrentPage = async (event) => {
        let page = parseInt(event.target.getAttribute('selectedpage'))
        await this.setState({
            selectPage: page
        })
        this.props.paginatedRecords(`/versions/paginated/offices?page=${this.state.selectPage}`)
    }
    
    render() {
        const prevPage = async () => {
            try {
                if(this.state.selectPage !== 1){
                    await this.setState({
                        selectPage: this.state.selectPage - 1
                    })
                    this.props.paginatedRecords(`/versions/paginated/offices?page=${this.state.selectPage}`)
                }
            }catch (e) {
                console.log(e)
            }
        }
        // const { pager, pageOfItems } = this.state;
        const nextPage = async () => {
            try {
                if(this.state.selectPage !== this.state.pager.pages.length) {
                    await this.setState({
                        selectPage: this.state.selectPage + 1
                    })
                    this.props.paginatedRecords(`/versions/paginated/offices?page=${this.state.selectPage}`)
                }
            }catch (e) {
                console.log(e)
            }
        }
        const lastPage = async () => {
            try {
                await this.setState({
                    selectPage: this.state.pager.totalPages
                })
                this.props.paginatedRecords(`/versions/paginated/offices?page=${this.state.selectPage}`)
            }catch (e) {
                console.log(e)
            }
        }
        return (
            <div >
                    <Records
                        data={this.state.pageOfItems}
                        tableHeaderObject={this.state.tableHeaders}
                    />
                <div className="card text-center m-3">
                    <div className="card-footer pb-0 pt-3">
                        { this.state.pager.pages &&  this.state.pager.pages.length &&
                            <ul className="pagination">
                                <li className={`page-item first-item ${this.state.pager.currentPage === 1 ? 'disabled' : ''}`}>
                                    <a className="page-link"
                                       onClick={this.firstPage}
                                    >
                                        First
                                    </a>
                                </li>
                                <li className={`page-item previous-item ${this.state.pager.currentPage === 1 ? 'disabled' : ''}`}>

                                    <a className="page-link"
                                       onClick={prevPage}
                                    >
                                        Previous
                                    </a>
                                </li>
                                {this.state.pager.pages.map(page =>
                                    <li key={page} className={`page-item number-item ${this.state.pager.currentPage === page ? 'active' : ''}`}>

                                        <a className="page-link"
                                           selectedpage={page}
                                           onClick={this.setCurrentPage}
                                        >
                                            {page}
                                        </a>
                                    </li>
                                )}
                                <li className={`page-item next-item ${this.state.pager.currentPage === this.state.pager.totalPages ? 'disabled' : ''}`}>

                                    <a className="page-link"
                                       onClick={nextPage}
                                    >
                                        Next
                                    </a>
                                </li>
                                <li className={`page-item last-item ${this.state.pager.currentPage === this.state.pager.totalPages ? 'disabled' : ''}`}>

                                    <a className="page-link"
                                       onClick={lastPage}
                                    >
                                        Last
                                    </a>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

ServerSidePagination.propTypes = {
    page: PropTypes.object.isRequired,
    fetchRecords: PropTypes.func.isRequired,
    records: PropTypes.array.isRequired,
    paginatedRecords: PropTypes.func.isRequired,
    paginated: PropTypes.object.isRequired,
    errorObject: PropTypes.object.isRequired,
    noRecords: PropTypes.object.isRequired, // number of records per page

};
const mapStateToProps = state => ({
    page: state.paginated_table.page,
    records: state.paginated_table.records,
    paginated: state.paginated_table.paginated,
    errorObject: state.paginated_table.errorObject,
    noRecords: state.paginated_table.noRecords
});

const mapDispatchToProps = dispatch => ({
    fetchRecords: () => dispatch(fetchRecords()),
    paginatedRecords: route => dispatch(paginatedRecords(route))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServerSidePagination);