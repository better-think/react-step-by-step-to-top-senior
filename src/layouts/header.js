import React from 'react'
import Avatar from './components/Avatar'

export default function header() {
    return (
        <div style={{backgroundColor: 'rgb(162 187 167)'}}>
            <ul>
                <li>home</li>
                <li>About</li>
            </ul>
            <div>
                <Avatar />
            </div>
        </div>
    )
}
