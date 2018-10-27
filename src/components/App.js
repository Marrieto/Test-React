import React, {Component} from 'react'

class App extends Component {


    onClick() {
        alert('Clicked')
    }

    onChange(event) {
        console.log(event.target.value)
    }

    onSubmit(event) {
        event.preventDefault()
        alert('Submitted')
    }

    render() {

        const title = 'This is Martin\'s app'
        const list = ['Item 1', 'Item 2', 'Item 3']

        return (
        <div>
            <h1>{title}</h1>
            <h3> 
                {
                    list.map(item => <div key={item} onClick={this.onClick}> item </div>)
                }
            </h3>
            
            <form onSubmit={this.onSubmit}>
                <input onChange={this.onChange}></input>
            </form>
            
        </div>
        )
        
    }
}

export default App