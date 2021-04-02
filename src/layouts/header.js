import React from 'react'
import Avatar from './components/Avatar'

export default function header() {
    return (
        <div style={{backgroundColor: 'rgb(162 187 167)', display: 'flex'}}>
            <div>
                <span>Home</span>
            </div>
            <div>
                <span>About</span>
            </div>
            <div>
                <Avatar />
            </div>
        </div>
    )
}
