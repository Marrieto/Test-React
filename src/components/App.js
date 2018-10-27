import React, {Component} from 'react'
import ProductItem from './ProductItem';
import AddProduct from './AddProduct'

const products = [
    {
        name: 'iPad',
        price: 300
    },
    {
        name: 'Pen',
        price: 10
    },
    {
        name: 'Boat',
        price: 30000
    }
]

localStorage.setItem('products', JSON.stringify(products))

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: JSON.parse(localStorage.getItem('products'))
        }

        this.onDelete = this.onDelete.bind(this)
        this.onAdd = this.onAdd.bind(this)
    }

    componentWillMount() {
        const products = this.getProducts()

        this.setState( {products} )    
    }

    getProducts() {
        return this.state.products
    }

    onAdd(name, price)
    {
        const products = this.state.products

        products.push({
            name: name,
            price: price
        })

        this.setState({products})
    }

    onDelete(name)
    {
        const products = this.getProducts()
        
        const filteredProducts = products.filter(product => {
            return product.name !== name
        })

        this.setState( {products: filteredProducts} )
    }

    render() {
        return (

        <div className="App">
            <h1> Product manager </h1>

            <AddProduct 
                onSubmit={this.onAdd}
            />

            {
                this.state.products.map( product => {
                    return (
                        <ProductItem 
                        key={product.name}
                        {...product}
                        onDelete={this.onDelete}
                        />
                            )
                })
            }
        </div>
        )
        
    }
}

export default App