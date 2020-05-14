import React, {Component} from 'react';


class TestForm extends Component{

    state = {
    }

    submitHandler = (event) => {
        event.preventDefault()
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
            //for input one, name=username, so this would make
            //'username' as the key! and assign it'se respective 
            //value as the value 
            //this works even if the key doesn't exist in the state
            //it creates it automatically for us 
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    
                    <input type="text" 
                    onChange={this.changeHandler} 
                    placeholder="username"
                    name="username"
                    />
                    <input type="text" 
                    onChange={this.changeHandler} 
                    placeholder="email"
                    name="email"
                    />
                    <input type="text" 
                    onChange={this.changeHandler} 
                    placeholder="password"
                    name="password"
                    />

                    <button>Save</button>

                </form>
            </div>
        )
    }
}


export default TestForm;
