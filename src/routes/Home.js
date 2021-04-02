import React from 'react'
import PropTypes from 'prop-types'
import Header from '../layouts/header'
import MyErrorBoundary from '../error-boundary/MyErrorBoundary';


function Home(props) {

    return (
        <React.Fragment>
            <MyErrorBoundary>
                <Header />
                <div>
                    Home
                </div>
            </MyErrorBoundary>
        </React.Fragment>
    )
}

Home.propTypes = {

}

export default Home