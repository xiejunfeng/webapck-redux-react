import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from '../routes/routes';
import createStore from '../store/index';
import styles from '../../amazeui/less/amazeui.less';
import * as Schemas from '../api/dataNormalize';
import { normalize, Schema, arrayOf } from 'normalizr';
import comments from '../mock/comment.json'


const history = createBrowserHistory();

export default props => {

    let storeData = {
        result:{},
        entities:{}
    };

    let articles = props;
    articles = normalize(articles,{
        articles:arrayOf(Schemas.article)
    });
    storeData.result.articles = articles.result.articles;
    storeData.entities = {...storeData.entities, ...articles.entities};

    let _comments = normalize(comments,{
        comments: arrayOf(Schemas.comment)
    });

    storeData.result.comments = _comments.result.comments;
    storeData.entities = {...storeData.entities, ..._comments.entities};

    const store = createStore(storeData);

    return (
      <Provider store={store}>
          <Router history={history} children={routes} />
      </Provider>
  );
};

