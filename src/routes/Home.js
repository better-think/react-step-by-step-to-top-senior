import React from 'react'
import PropTypes from 'prop-types'
import Header from '../layouts/header'


function Home(props) {

    return (
        <React.Fragment>
            <Header />
            <div>
                Home
            </div>
        </React.Fragment>
    )
}

Home.propTypes = {

}

export default Home