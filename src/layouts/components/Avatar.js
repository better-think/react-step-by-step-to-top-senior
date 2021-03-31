import React, {Component} from 'react'
import Contexts from '../../context-providers'

class Avatar extends Component {

    static contextType = Contexts.ThemeColor;

    render() {
        console.log("this.context", this.context);
        return (
            <div>
                <img src='https://' />
                <span>name</span>
            </div>
        )
    }
}

export default Avatar
