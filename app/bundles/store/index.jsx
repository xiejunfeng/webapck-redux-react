import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
import getArticlesLists from '../action/article'
import logger from 'redux-logger'


export default props => {
    let reducer = reducers;
    let middleware = [];
    let finalCreateStore;
    let initialState = props;

    if (process.env.NODE_ENV === 'production') {
        middleware = [thunk];
        finalCreateStore = applyMiddleware(...middleware)(createStore);
    } else {
        middleware = [thunk, logger()];
        finalCreateStore = compose(
            applyMiddleware(...middleware)
        );
    }

    let stroe = finalCreateStore(createStore)(reducer, initialState);

    stroe.dispatch(getArticlesLists())


    return stroe;
};