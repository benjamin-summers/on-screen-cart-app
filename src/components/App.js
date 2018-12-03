import React, { Component } from 'react';
import Form from './Form';

export default class App extends Component {
    state = { 
        name: '',
        price: '',
        src: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Form Change={this.handleChange.bind(this)} name={this.state.name} price={this.state.price} src={this.state.src} />
            </div>
        )
    }
}