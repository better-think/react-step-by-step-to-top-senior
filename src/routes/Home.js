import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Header from '../layouts/header'
import MyErrorBoundary from '../error-boundary/MyErrorBoundary';

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="button-fancy">
        {
            props.children
        }
    </button>
))



function Home(props) {

    const fancyButtonRef = React.createRef();

    return (
        <React.Fragment>
            <MyErrorBoundary>
                <Header />
                <div>
                    Home page
                </div>
                <div>
                    <FancyButton ref={fancyButtonRef} > Click Me </FancyButton>
                </div>
            </MyErrorBoundary>
        </React.Fragment>
    )
}

Home.propTypes = {

}

export default Home