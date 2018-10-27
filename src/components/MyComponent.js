import React, {Component} from 'react'

class MyComponent extends Component {
    
    render() {

        const { title, name, onClick } = this.props

        return (
        <div className="MyComponent" onClick={onClick}>
            <h3>Title: {title}</h3>
            <h3>Name: {name}</h3>
        </div>
        )
        
    }
}

export default MyComponent