import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router';

import { getAllArticles } from '../reducers/article'
import AticleList from '../components/articleList';



export default class acticleContainer extends Component {

    shouldComponentUpdate(nextProps){
        console.log(nextProps, this.props)
        return true;
    }
    render() {
        const {articleListDatas} = this.props
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
        articleListDatas: getAllArticles(state)
    }
}

export default connect(mapStateToProps)(acticleContainer)