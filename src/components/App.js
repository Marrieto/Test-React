import React, {Component} from 'react'
import MyComponent from './MyComponent';

class App extends Component {

    constructor(props)
    {
        super(props)
        this.onClick = this.onClick.bind(this)

        this.state = {
            title: 'Reactions'
        }
    }

    onClick(event) {
        this.setState({
            title: 'New titleo'
        })
    }

    render() {
        return (
        <div>
            <h1>{this.state.title}</h1>
            <div onClick={this.onClick}> Click me! </div>
            <MyComponent 
            title="My Comonent"
            name= "Erik"
            onClick={this.onClick}/>
        </div>
        )
        
    }
}

export default App