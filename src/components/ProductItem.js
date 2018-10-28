import React, { Component } from 'react';
import Button from '../Styles/Button';

class ProductItem extends Component {

    constructor(props) {
        super(props)

        this.onDelete = this.onDelete.bind(this)
    }

    onDelete()
    {
        const { onDelete, name } = this.props

        onDelete(name)
    }

    render() {

        const { name, price, onDelete } = this.props

        return (
            <div> 
            <span>{name}</span>
            {` | `}
            <span>{price}</span>
            {` | `}
            <Button onClick={this.onDelete}>Delete</Button>
         </div>
        );
    }
}

export default ProductItem;