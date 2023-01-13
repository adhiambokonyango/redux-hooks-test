import React, {Component} from 'react';
import './ItemCounter.css'
import NumberCounter from 'number-counter';
class ItemCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percentage:0,
        };
    }
    increaseCounter = () => {
        let counter = 0;
        setInterval(() => {

            // number.innerHTML = counter + "%";
            if (counter === 65){
                clearInterval()
            }else {
                counter +=1
                this.setState({
                    percentage: counter
                })
            }

        }, 35)
    }
    componentDidMount() {
        this.increaseCounter()
    }

    render() {
        return (
            <div>
                <div id="number">
                   <h3>{this.state.percentage} </h3>
                </div>
            </div>
        );
    }
}

export default ItemCounter;