import React, { Component } from 'react';
import Form from './Form';
import Product from './Product';

export default class App extends Component {
    state = { 
        src: []
    }

    handleChange = e => {
        this.setState({
            src: [e.target.value]
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        let productList = [];

        productList.push(this.state.src);

        this.setState({
            src: [...productList]
        })
    }

    render() {

        let productsRender = this.state.src.map((product) => {
            return <Product pdSrc={product} />
        })

        return (
            <div>
                <Form Submit={this.handleSubmit.bind(this)} Change={this.handleChange.bind(this)} src={this.state.src} />
                {productsRender}
            </div>
        )
    }
}