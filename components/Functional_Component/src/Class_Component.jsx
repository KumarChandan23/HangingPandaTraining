import React, { Component } from 'react'

export default class Class_Component extends Component {

    constructor(props) {
        super(props);
        this.state = {
            day: "Wednesday"
        }
    }

    render() {
        const codeString = `    import React, { Component } from 'react'
        
    class componentName extends Component { 
        constructor(props){
        supter(props);
        this.state = {
            day: "Wednesday"}
        }
        render() { 
            return (
                <div>
                    <h1>Class Based component Example</h1>
                    <h2>Day: {this.state.day}</h2>
                </div>
            )
        }
    }`
        return (
            <div>
                <h1>Class Based component Example</h1>
                <h2>Day: {this.state.day}</h2>
                <pre>
                    {codeString}
                </pre>
            </div>
        )
    }
}
