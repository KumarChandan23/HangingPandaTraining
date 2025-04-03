import React, { Component } from 'react'

export default class Class_Component extends Component {

    render() {
        const codeString = `    import React, { Component } from 'react'
    class componentName extends Component { 
        render() { 
            return "Class Component"
        }
    }`
        return (
            <div>
                <h1>Class Based component Example</h1>
                <pre>
                    {codeString}
                </pre>
            </div>
        )
    }
}
