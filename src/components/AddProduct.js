import React, { Component } from 'react';

class AddProduct extends Component {

    constructor(props) {
        super(props);
        
        this.onSubmit = this.onSubmit.bind(this)
    }
    

    onSubmit(event)
    {
        event.preventDefault()

        this.props.onSubmit(this.nameInput.value, this.priceInput.value)
    }

    render() {
        return (
        <form onSubmit={this.onSubmit}> 
            <h3>Add product</h3>
            <input placeholder="Name" ref={nameInput => this.nameInput = nameInput}></input>
            <input placeholder="Price" ref={priceInput => this.priceInput = priceInput}></input>
            <button>Add</button>
            <hr />
         </form>
        );
    }
}

export default AddProduct;