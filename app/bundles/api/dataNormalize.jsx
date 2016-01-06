import { normalize, Schema, arrayOf } from 'normalizr';
import _articles from "../mock/articles.json";

export const article = new Schema('articles');
export const user = new Schema('users');
export const comment = new Schema('comments');

article.define({
    author: user
});
comment.define({
    article:article,
    reviewer:user
});


