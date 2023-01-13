import React, {Component} from 'react';
import './Layout.css'
class MenuLayout extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="large-content">
                    {this.props.form}
                </div>
                <div className="content-right">
                    {this.props.response}
                </div>

            </div>
        );
    }
}

export default MenuLayout;