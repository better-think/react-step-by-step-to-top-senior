import React,{ Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class BlogPost extends Component{
    
    render() {
        let {data} = this.props;
        return (
            <div>
                <div>
                    <p>{data.title || ""}</p>
                    <p>{data.content || ""}</p>
                </div>
            </div>
        )
    }
}

BlogPost.propTypes = {
    id: PropTypes.number
}


export default BlogPost;
