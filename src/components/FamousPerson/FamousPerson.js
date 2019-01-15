import React, { Component } from 'react';

class FamousPerson extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            role: '',
        };
    }

    onNameChange = (event) => {
        console.log(event.target.value);
        // Let's change state, which triggers render()
        this.setState({
            // event.target is the input field
            name: event.target.value
        });
    }

    onRoleChange = (event) => {
        console.log(event.target.value);
        // Let's change state, which triggers render()
        this.setState({
            // event.target is the input field
            role: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h2>FamousPerson:</h2>
                <input onChange={this.onNameChange} placeholder="name" />
                <input onChange={this.onRoleChange} placeholder="role" />
                <p>{this.state.name} is famous for "{this.state.role}"</p>
            </div>
        );
    }
}

export default FamousPerson;