import React, {Component} from 'react';
import { Steps } from 'rsuite';
import "./Step.css"
// https://rsuitejs.com/components/steps/
class Step extends Component {
    constructor(props){
        super(props);
        this.state = {

            current: this.props.current
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.current !== prevProps.current) {
            if (this.props.current){
                this.setState({
                    current: this.props.current
                })
            }
        }
    }

    render() {
        return (
            <div>
                <Steps current={this.state.current}  >
                    <Steps.Item classPrefix="steps-item"/>
                    <Steps.Item classPrefix="steps-item"/>
                    <Steps.Item classPrefix="steps-item"/>
                 
                </Steps>
            </div>
        );
    }
}

export default Step;