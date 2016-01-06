import superagent from 'superagent';
import jsonApi from 'superagent-jsonapify';
import { normalize, Schema, arrayOf } from 'normalizr';
import * as Schemas from './dataNormalize'

jsonApi(superagent);

export default {
    getArticles(cb){
        superagent.get('./mock/articles.json').end(function (err, res) {
            if(!err){
                let articles = res.body;
                articles = normalize(articles,{
                    articles:arrayOf(Schemas.article)
                });
                cb && cb(articles)
            }
        })
    }
};