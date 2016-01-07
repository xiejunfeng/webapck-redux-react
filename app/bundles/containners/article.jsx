import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router';

import { getAllArticles } from '../reducers/article'
import AticleList from '../components/articleList';



export default class acticleContainer extends Component {

    shouldComponentUpdate(nextProps){
        return nextProps.articleListDatas.articleListResult !== this.props.articleListResult;
    }
    render() {
        const {articleListDatas} = this.props
        console.log(articleListDatas)
        console.log('render ------------- acticleContainer')
        return (
            <div>
                <AticleList listdatas = {articleListDatas}></AticleList>
            </div>
        )
    }
}

acticleContainer.propTypes = {
    articleListDatas:PropTypes.array
}



function mapStateToProps(state){
    return {
        articleListResult:state.result.articles,
        articleListDatas: getAllArticles(state)
    }
}

export default connect(mapStateToProps)(acticleContainer)