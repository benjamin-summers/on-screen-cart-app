import React from 'react';

const Product = ({pdSrc}) => {
    const productStyle = {
        width: 100,
        height: 100
    }

    return (
        <div>
            <img style={productStyle} src={pdSrc} alt="product one" />
        </div>
    )
}

export default Product;