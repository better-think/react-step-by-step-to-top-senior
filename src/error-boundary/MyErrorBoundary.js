import React, { Component } from 'react'

export default class MyErrorBoundary extends Component {
    state = {}

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }


    render() {

        if(this.state.hasError) {
            return (
                <div>
                    something went wrong
                </div>
            )
        }
       
        return (
            this.props.children
        )
    }
}
