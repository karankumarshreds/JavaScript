////////////////////////////// PARENT ///////////////////////////////////////

import React, {Component} from 'react';
import Item from './ListItem/ListItem'

class ListGen extends Component {

    state = {
        numbers: [1,2,3,4,5,6,7,8,9]
    }

    remove = (value) => {
        this.setState((oldState) => {
            return {
                numbers: oldState.numbers.filter((each) => {
                    return each != value;
                })
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.numbers.map((each) => {
                    return <Item value={each} remove={this.remove}/>   
                })}
            </div>
        )
    }
}

export default ListGen;




///////////////////////////// CHILD ///////////////////////////////////

import React, {Component} from 'react';


class ListItem extends Component {

    handleRemove(event) {
        this.props.remove(this.props.value)
    }

    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
                <button onClick={this.handleRemove.bind(this)}> X</button>
            </div>
        )
    }
}

export default ListItem;
