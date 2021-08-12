import React, { Component } from 'react'

class Counter extends Component{

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         number: 0,
    //         fixedNumber:3
    //     }
    // }

    state = {
            number: 0,
            fixedNumber:3
    };
    render() {
        const {number, fixedNumber} = this.state;
        const {button} = this.props;
        
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button onClick={()=>{this.setState({number:number+1})}}>{button}</button>
            </div>
        );
    }
}

export default Counter;