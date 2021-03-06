import React, { Component } from 'react';

class FamousPerson extends Component {
    constructor() {
        super();
        this.state = {
            person: {
                name: '',
                role: '',
            }
        }
    }

    onNameChange = (event) => {
        this.setState({
            person: {
                ...this.state.person,
                name: event.target.value            }
        });
        console.log(this.state);
    }

    onRoleChange = (event) => {
        this.setState({
            person: {
                ...this.state.person,
                role: event.target.value
            }
        });
        console.log(this.state);
    }

    submit = (event) => {
        console.log(`name:${this.state.person.name}, role:${this.state.person.role}`);
    }

    render() {
        return (
            <div>
                <h2>FamousPerson:</h2>
                <input onChange={this.onNameChange} placeholder="name" />
                <input onChange={this.onRoleChange} placeholder="role" />
                <button onClick={this.submit}>Submit</button>
                <p>{this.state.person.name} is famous for "{this.state.person.role}"</p>
            </div>
        );
    }
}

export default FamousPerson;