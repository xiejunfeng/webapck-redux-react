import React from 'react'
import { Route, IndexRoute} from 'react-router'
import Information from '../components/index'
import Inbox from '../components/inbox'

import App from '../containners/app'
import ArticleContainer from '../containners/article'
import commentContainner from '../containners/comment'

export default (
    <Route path="/" component={App}>

            <Route
                path="comment"
                component={commentContainner}>
            </Route>
            <Route
                path="article"
                component={ArticleContainer}>
            </Route>
    </Route>
)