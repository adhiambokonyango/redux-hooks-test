import React from 'react';
import Records from "./Records";
import './PaginatedTable.css'
import { fetchRecords} from '../../store/paginated-table/actions'
import PropTypes from "prop-types";
import {connect} from "react-redux";
class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            data: [],
            recordsPerPage: 8,
            previousPage:0,
            sortedPages: []

        };
    }

    componentDidMount() {
      this.loadOffices();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevState.currentPage !== this.state.currentPage){
            let num = prevState.currentPage
            this.setState({
                previousPage: num.toString(),
            })
        }
        if (prevProps.records !== this.props.records){
            this.setState({
                data: this.props.records
            });
        }
    }

    loadOffices = () =>{
        try {
             this.props.fetchRecords();
        }catch (e) {
            console.log(e)
        }
    }

     setCurrentPage = async (event) => {
        //  event.preventDefault();
        // console.log("current", event.currentTarget.textContent)
        let page = parseInt(event.target.getAttribute('selectedpage'))
        this.setState({
            currentPage: page
        })

        // console.log(event.target.getAttribute('currentpage'))
        // console.log(event.target.getAttribute('selectedpage'))
    }

    render() {
        let indexOfLastRecord = this.state.currentPage * this.state.recordsPerPage;
        let indexOfFirstRecord = indexOfLastRecord - this.state.recordsPerPage;
        let currentRecords = this.state.data.slice(indexOfFirstRecord, indexOfLastRecord);
        let nPages = Math.ceil(this.state.data.length / this.state.recordsPerPage)
        const pageNumbers = []
            // [...Array(nPages + 1).keys()].slice(1)
        for (let i = 1; i <= nPages; i++) {
            if (i <= 5 || //the first five pages
                i === nPages || //the last page
                Math.abs(this.state.currentPage - i) <= 1 //the current page and the one before and after
            )
                pageNumbers.push(i);
        }

        const nextPage = async () => {
            if(this.state.currentPage !== nPages) {
               await this.setState({
                currentPage: this.state.currentPage + 1
                })
            }
        }
        const prevPage = () => {
            if(this.state.currentPage !== 1){
                this.setState({
                    currentPage: this.state.currentPage - 1
                })
            }

        }
        // load pagination list
        const loadNumbers = async () =>{
            let pages = [];
            for (let i = 1; i <= nPages; i++) {
                if (i <= 5 || //the first five pages
                    i === nPages || //the last page
                    Math.abs(this.state.currentPage - i) <= 1 //the current page and the one before and after
                )
                    pages.push(i);
            }
            return pages
        }


        return (
            <div >
                <Records data={currentRecords}/>
                <div className="pagination-container">
                    <nav>
                        <ul className='pagination justify-content-center'>
                            <li className="page-item">
                                <a className="page-link"
                                   onClick={prevPage}
                                   >

                                    Previous
                                </a>
                            </li>
                            {pageNumbers.map((pgNumber) => (
                                <li key={pgNumber}
                                    value={pgNumber}
                                    className= {`page-item ${this.state.currentPage === pgNumber ? 'active' : ''} `}
                                >
                                    <a className="page-link"
                                       selectedpage={pgNumber}
                                       currentpage={this.state.currentPage}
                                       onClick={this.setCurrentPage}
                                    >
                                        {pgNumber}
                                    </a>

                                </li>
                            ))}
                            <li className="page-item">
                                <a className="page-link"
                                   onClick={nextPage}
                                   >

                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

Pagination.propTypes = {
    page: PropTypes.object.isRequired,
    fetchRecords: PropTypes.func.isRequired,
    records: PropTypes.array.isRequired,

};
const mapStateToProps = state => ({
    page: state.paginated_table.page,
    records: state.paginated_table.records,
});

const mapDispatchToProps = dispatch => ({
    fetchRecords: () => dispatch(fetchRecords()),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);