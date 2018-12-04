import React, { Component } from 'react';
import Form from './Form';
import Product from './Product';
import '../styles/main.css';

export default class App extends Component {
    state = { 
        term: '',
        src: [],
        cart: []
    }

    handleChange = e => {
        this.setState({
            term: [e.target.value]
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const {src, term} = this.state;

        let productsList = src;

        productsList.push(term);

        this.setState({
            src: productsList
        })
    }

    render() {

        let productsRender = this.state.src.map((product) => {
            return <li onClick={() => {let cartList = this.state.cart; cartList.push(product); this.setState({cart: cartList});}}><Product className="product" key={Date.toString()} pdSrc={product} /></li>;
        })
        
        let cartRender = this.state.cart.map((cartItem) => {
            return <li className="cart-item"><Product key={Date.toString} pdSrc={cartItem} /></li>
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
                        <ul>
                            {cartRender}
                        </ul>
                </div>
            </div>
        )
    }
}