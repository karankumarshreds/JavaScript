

///////////////// PADDING DATA FROM CHILD TO PARENT //////////////////



/////////// PARENT //////////////

import React, {Component} from 'react';
import UpstreamForm from './UpstreamForm';

class Upstream extends Component{

    state = {
        users : [
            {name: 'user1', email: 'user1@user1'}
        ]
    }

    changeData = (data) => {
        this.setState((oldState) => {
            return {
                users: [...oldState.users, data]
            }
        })
    }

    showData() {
        return(
            this.state.users.map((each) => {
                return (
                <h1>{each.name} : {each.email}</h1>
                ) 
             })
        )
    }

    render() {
        console.log(this.state)
        return (
            <div>
                SHOPPING
                {this.showData()}
                <UpstreamForm 
                changeData={this.changeData}
                />
            </div>
        )
    }

}

export default Upstream;



//////////////////////// CHILD /////////////////////////////

import React, {Component} from 'react';

class UpstreamForm extends Component {
    
    state = {
        name: '',
        email: ''
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.changeData(this.state)
    }

    changeHander(event) {
        event.persist();    // This needs to be called while using callbacks as it nullifies the event
        this.setState((state) => {
            return {
                [event.target.name] : event.target.value
            }
        })
        
        // OR
        
        this.setState({
            [event.target.name] : event.target.value,
            //for input one, name=username, so this would make
            //'username' as the key! and assign it'se respective 
            //value as the value 
            //this works even if the key doesn't exist in the state
            //it creates it automatically for us 
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <input 
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={this.changeHander.bind(this)}
                     />
                     <input 
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={this.changeHander.bind(this)}
                     />
                     <button>Submit!</button>
                </form>
            </div>
        )
    }

}

export default UpstreamForm;

