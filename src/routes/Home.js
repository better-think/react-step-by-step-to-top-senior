import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Header from '../layouts/header'
import MyErrorBoundary from '../error-boundary/MyErrorBoundary';
import DataSource from '../services/DataSource';
import BlogPost from '../components/Blogpost';
import CommentList from '../components/CommentList';


const withSubscription = function (WrappedComponent, selectData) {
    return class extends Component{
        state = {
            data: []
        }

            
        componentDidMount() {
            // ... that takes care of the subscription...
            DataSource.addChangeListener(this.handleChange);
        }
    
        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }
        
        handleChange = () => {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />  
        }
    }
}

const CommentListWithSubscription  = withSubscription(CommentList,  (DataSource) => DataSource.getComments())
const BlogPostWithSubscription = withSubscription( BlogPost, (DataSource, props) => DataSource.getBlogPost(props.id));

function Home(props) {

    const fancyButtonRef = React.createRef();

    return (
        <React.Fragment>
            <MyErrorBoundary>
                <Header />
                <div>
                    Home page
                </div>
                <div style={{backgroundColor: 'green'}}>
                    <BlogPostWithSubscription id={1} />
                </div>
                <div>
                    <p>Comments</p>
                </div>
                <div style={{paddingLeft: 20, backgroundColor: 'yellow'}}>
                    <CommentListWithSubscription />
                </div>
            </MyErrorBoundary>
        </React.Fragment>
    )
}

Home.propTypes = {

}

export default Home