import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './components/Avatar'

export default function header() {

    return (
        <div style={{backgroundColor: 'rgb(162 187 167)'}}>
            <nav style={{display: 'flex'}}>
                <div style={{padding: '0 10px'}}>
                    <Link  to="/home">Home</Link>
                </div>
                <div style={{padding: '0 10px'}}>
                    <Link to="/about" >About</Link>
                </div>
                <div>
                    <Avatar />
                </div>
            </nav>
        </div>
    )
}
