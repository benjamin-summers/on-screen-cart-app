import React, { Component } from 'react';
import Form from './Form';
import Product from './Product';
import '../styles/main.css';

export default class App extends Component {
    state = { 
        term: '',
        src: []
    }

    handleChange = e => {
        this.setState({
            term: [e.target.value]
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const {src, term} = this.state;

        let productList = [...src];

        productList.push(term);

        this.setState({
            src: [src, ...productList],
            term: ''
        })
    }

    render() {

        let productsRender = this.state.src.map((product) => {
            return <li><Product className="product" key={Date.toString()} pdSrc={product} /></li>;
        })

        return (
            <div className="container">
                <div className="search-bar">
                    <Form Submit={this.handleSubmit.bind(this)} Change={this.handleChange.bind(this)} src={this.state.term} />
                </div>
                <div className="products">
                    <ul>
                        {productsRender}
                    </ul>
                </div>
                <div className="cart">
                    ProductCart
                </div>
            </div>
        )
    }
}