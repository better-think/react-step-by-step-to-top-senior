import React from 'react'

function MyErrorBoundary(props) {
    console.log(props);

    return (
        <div>
            <span>Error happed while .....</span>
        </div>
    )
}

export default MyErrorBoundary