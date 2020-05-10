changeValue(id) {
    
    // make a new reference array
    const newTodo = this.state.todos.map((each) => {
        if(each.id == id) {
            return {...todo, title: 'new title'} //this makes a new array 
        }
        return todo;
    })

    this.setState({
        todos: newTodo
    });
}


///////////////////////// full example //////////////////////////////

import React, {Component} from 'react';
import Ball from '../Ball/Ball'
import './Lottery.css'

class Lottery extends Component{
    
    static defaultProps = {
        title: 'lotto',
        maxBalls: 6,
        maxNum: 40
    }

    state = {
        // nums: Array.from({length : this.props.maxBalls})
        nums: new Array(this.props.maxBalls).fill(undefined)
    }

    generate = () => {
        // const randArr = new Array(this.props.maxBalls).fill(1);
        // randArr.forEach((el, i) => {
        //     randArr[i] = Math.floor(Math.random()*this.props.maxNum);
        // });
        // this.setState({
        //     nums: randArr
        // });
        
        //better way
        this.setState((newState) => ({
            //newState becomes a copy of state
            nums: newState.nums.map(n => {
                return Math.floor(Math.random()*this.props.maxNum);
            })
        }));

    }

    clickHandler = () => {
        this.generate();    
    } 

    render() {
    
        // 
        return (
            <div className='Lottery'>
                <h1>{this.props.title}</h1>
                {this.state.nums.map((num) => {
                    return <Ball num={num}/>
                })}
                <br/>
                <button onClick={this.clickHandler.bind(this)}>Try Again!</button>
            </div>
        )
    }

}

export default Lottery;
