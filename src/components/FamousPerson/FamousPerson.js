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
        this.setState({
            name: event.target.value
        });
    }

    onRoleChange = (event) => {
        this.setState({
            role: event.target.value
        });
    }

    submit = (event) => {
        console.log(`name:${this.state.name}, role:${this.state.role}`);
    }

    render() {
        return (
            <div>
                <h2>FamousPerson:</h2>
                <input onChange={this.onNameChange} placeholder="name" />
                <input onChange={this.onRoleChange} placeholder="role" />
                <button onClick={this.submit}>Submit</button>
                <p>{this.state.name} is famous for "{this.state.role}"</p>
            </div>
        );
    }
}

export default FamousPerson;