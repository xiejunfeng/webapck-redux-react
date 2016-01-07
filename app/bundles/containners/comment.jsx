import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router';

import { getAllArticles } from '../reducers/article'
import { getAllComments } from '../reducers/comment'
import CommentList from '../components/commentList';



export default class commentContainner extends Component {

    shouldComponentUpdate(nextProps){
        return nextProps.commentListResult !== this.props.commentListResult;
    }
    render() {
        console.log('render ------------- commentContainner')
        const {commentLists} = this.props
        return (
            <div>
                <CommentList listdatas = {commentLists}></CommentList>
            </div>
        )
    }
}

commentContainner.propTypes = {
    commentListResult:PropTypes.array,
    commentLists:PropTypes.array
}


function mapStateToProps(state){
    console.log(state.result.comments);
    return {
        commentListResult:state.result.comments,
        commentLists: getAllComments(state)
    }
}

export default connect(mapStateToProps)(commentContainner)