import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router';

export default class App extends Component {

    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/article">article</Link></li>
                    <li><Link to="/comment">comment</Link></li>
                </ul>
                {this.props.children || "你好"}

            </div>
        )
    }
}

export default connect()(App)