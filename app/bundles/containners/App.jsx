import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import AticleList from '../components/articleList'
import { getAllArticles } from '../reducers/article'


export default class App extends Component {

    render() {
        const {articleListDatas} = this.props
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/information">information</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                <div>
                    <AticleList listdatas = {articleListDatas}></AticleList>
                </div>

            </div>
        )
    }
}

App.propTypes = {
    articleListDatas:PropTypes.array
}





function mapStateToProps(state){
    return {
        articleListDatas: getAllArticles(state)
    }
}

export default connect(mapStateToProps)(App)