import React from 'react';

const Form = props => {
    return (
        <div>
            <form>
                <input onChange={props.Change} type="text" value={props.name} name="name" />
                <input onChange={props.Change} type="text" value={props.price} name="price" />
                <input onChange={props.Change} type="text" value={props.src} name="src" />
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default Form;