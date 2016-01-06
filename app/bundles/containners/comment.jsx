import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router';

import { getAllArticles } from '../reducers/article'
import CommentList from '../components/commentList';



export default class commentContainner extends Component {

    shouldComponentUpdate(nextProps){
        console.log(nextProps, this.props)
        return true;
    }
    render() {
        const {commentLists} = this.props
        return (
            <div>
                <CommentList listdatas = {commentLists}></CommentList>
            </div>
        )
    }
}

commentContainner.propTypes = {
    commentLists:PropTypes.array
}


function mapStateToProps(state){
    return {
        commentLists: getAllArticles(state)
    }
}

export default connect(mapStateToProps)(commentContainner)