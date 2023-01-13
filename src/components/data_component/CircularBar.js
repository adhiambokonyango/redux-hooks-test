import React, {Component} from 'react';
import './CircularBar.css'
import { connect } from "react-redux";
import {sidebarCollapse} from "../../store/sidebar_management/collapse/actions";
class CircularBar extends Component {
    // https://www.npmjs.com/package/react-circular-progressbar
    constructor(props) {
        super(props);
        this.state = {
            percentage:0,
            smallpercentage: 0

        };
    }

    componentDidMount() {
        this.increaseCounter()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isCollapsed !== prevProps.isCollapsed) {
            if (this.props.isCollapsed){
              //  console.log(this.props.isCollapsed)
            }
        }
    }


    increaseCounter = () => {
      let number = document.getElementById("#number")
      let counter = 0;
      setInterval(() => {

         // number.innerHTML = counter + "%";
          if (counter === 65){
              clearInterval()
          }else {
              counter +=1
              this.setState({
                  percentage: counter + "%"
              })
          }

      }, 35)
  }

  largeScore = () => {
      /*472-472 *0.65*/
     return 472-472 *0.65
  }
    smallScore = () => {
     return 330-330 *0.65
    }

    render() {
        return (
            <div>
                <div className={
                    this.props.isCollapsed? "bigger-skill":"skill"
                } >
                    <div className={
                        this.props.isCollapsed? "bigger-outer":"outer"
                    }>
                        <div className={
                            this.props.isCollapsed? "bigger-inner":"inner"
                        }>
                            <div id="number">
                                {this.state.percentage}
                            </div>
                        </div>
                    </div>
                    <svg id="bar-svg" xmlns="http://www.w3.org/2000/svg" version="1.1"
                         width={this.props.isCollapsed?"160px":"120px"}
                         height={this.props.isCollapsed?"160px":"120px"}
                    >
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle
                            style={this.props.isCollapsed?
                                {strokeWidth:"20px",
                                    strokeDasharray: 472,
                                    strokeDashoffset: 472,
                                    animation: "largeanim 2s linear forwards",
                                    '--score': this.largeScore()
                                }:
                                {strokeWidth:"15px",
                                    strokeDasharray: 330,
                                    strokeDashoffset: 330,
                                    animation: "baranim 2s linear forwards",
                                    '--small-score': this.smallScore()
                                }}
                            cx={this.props.isCollapsed?"80":"60"}
                            cy={this.props.isCollapsed?"80":"60"}
                            r={this.props.isCollapsed?"70":"53"}
                            stroke-linecap="round" />
                    </svg>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isCollapsed: state.collapse.isCollapsed,

});

const mapDispatchToProps = dispatch => ({
    sidebarCollapse: () => dispatch(sidebarCollapse()),


});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CircularBar);

