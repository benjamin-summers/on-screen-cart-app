import React from 'react';

const Form = props => {
    return (
        <div>
            <form onSubmit={props.Submit}>
                <input onChange={props.Change} type="text" value={props.src} name="src" />
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default Form;