import { Component } from "react";

class CommentList extends Component{
    render() {
        const {data} = this.props;

        return (
            <div>
                {
                    data.map((d, index) => (
                        <div key={index}>
                            <p>{d.comment}</p>
                            <p><span>commentedBy:</span> <span>{d.commentedBy}</span></p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default CommentList