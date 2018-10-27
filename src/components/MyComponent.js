import React, {Component} from 'react'
import PropTypes from 'prop-types' // Type safety on props, let the user know what props are needed

const propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired
}

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

MyComponent.propTypes = propTypes

export default MyComponent