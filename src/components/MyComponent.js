import React, {Component} from 'react'
import PropTypes from 'prop-types' // Type safety on props, let the user know what props are needed

const propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired
}

const defaultProps = {
    name: 'Default name the component',
    title: 'Default title of the component'
}

class MyComponent extends Component {
    
    componentWillMount()
    {
        // Good place to do ajax requests, db requests
    }

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
MyComponent.defaultProps = defaultProps

export default MyComponent