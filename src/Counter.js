import React from "react"
import Button from "./Button"
import styled from "styled-components"

const CounterEl = styled.div`
    text-align: center;
    padding: 20px;
`;
const Count = styled.div``;

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            positionClicked: false,
            negativeClicked: false
        }
    }

    onClick(isPositive) {
        this.setState({
            count: isPositive ? this.state.count + 1 : this.state.count - 1
        });
    }

    render() {
        return (
            <CounterEl>
                <Count>{this.state.count}</Count>
                <div className="counters">
                    <Button onClick={() => {this.onClick(true)}}>+1</Button>
                    <Button onClick={() => {this.onClick(false)}}>-1</Button>
                </div>
            </CounterEl>
        )
    }
}
