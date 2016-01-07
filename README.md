# redux + react + react-router + webpack

npm install

node server.js

## 背景

主站视觉改版，希望改版的同时能够提高性能和开发效率；由于最近react的概念还是蛮火的，也想跟一下潮流，就进行了相关调研，并觉着方案可行，能实现此次改版重构的目标
（相关技术详细介绍在后面，可以跳过前面累述，第一次写这种东西，乱七八糟，希望大神们多多指点）


## 目标
* seo
* 渲染速度和性能提升
* 资源合理分包
* 公共组件建设

## 相关对比

         | 之前        | 现在seo            | 现在客户端
-------- |------------|--------------------|--------------------
渲染方式  | ruby渲染    | rails\_on_react    | 客户端redux+react
数据获取  | ruby直接输出 | ruby直接输出        | ruby api + ajax + 直接输出
页面组织  | 多页输出     | 多页输出            | 多页路由 + 单页输出
路由方式  | ruby管理    |  ruby管理           | ruby多页切换  + react-router单页切换
打包方式  | ----       |  webpack            | webpack

## 性能相关

待测试-------------

## 相关技术
* 1、redux状态机管理，天生的与react友好融合
* 2、react-router + history 路由管理
* 3、react + react-dom 组件开发，模板渲染
* 4、react-redux 链接ract+redux 便于store、props传递
* 5、redux-logger 开发阶段监听状态变化
* 6、redux-thunk 中间件，便于dispatch分发
* 7、loash 基础功能库
* 8、normalizr 数据范式化，利于性能
* 9、superagent 请求管理，客户端和服务器端可公用
* 10、 webpack  资源打包  （目前css打包这一块儿还是想实现一些比较奇葩的逻辑，但是并没有找到特别好的解决方案）

## 优点（不是优点的优点，所谓的自我感觉良好，嘿嘿）
* 1、各种渲染任意切换，seo服务器渲染，用户体验客户端渲染，资源加载、接口响应延时渲染、渲染
* 2、路由前后端统一
* 3、资源打包热编译，开发响应迅速，静态合并，体积轻小，内嵌和外部引用灵活，按需加载功能也很炫酷，可做细粒度规划
* 4、单页即是多页，多页亦可单页
* 5、组件式开发 方便复用，迁移
* 6、数据单项传递，解决前端各种状态混乱不方便管理和维护的问题
* 7、编码方式规范，利于团队合作
* 8、方便以后接入node中间层，项目整体的复制和迁移性非常高
* 9、狂拽炫酷*炸天

## 挑战和问题
* 1、es6新规范
* 2、组件的拆分
* 3、逻辑被封装，代码的组织单一，失去了编码乐趣（某人的言论）
* 4、新人学习成本高，上手难度较大
* 5、文档输出     （有这个想法，但是感觉业务压力并行，很难去实践）
* 6、单元测试引入  （项目上线之后，就应该会抽时间去推这个事情）

## 技术详解
[redux 英文文档](http://rackt.org/redux/index.html) , [中文文档](http://camsong.github.io/redux-in-chinese/index.html)；

详细理解参见[Redux 核心概念](http://www.jianshu.com/p/3334467e4b32)，  这边文章其实已经把项目用到的东西都讲了一遍，写得非常好。

其他技术文档，自行上github搜索，哈哈(中文文档多半有坑，小心使用)

## 技术要点

1、入口渲染

```js
//props 数据传递
ReactDOM.render(App(!{props}), document.getElementById('app'));
```

2、 向外暴露接口

```js
import App from './ClientApp';

window.App = App;
```

3、容器包装

```js
//clientApp.jsx
export default props => {

    //todo...
    //prpos = normalize();
    //范式化props
   
   //import createStore from '../store/index';
    const store = createStore(props);
	
	 //Provider这个模块是作为整个App的容器, 接受Redux的store作为props,传递给后面的组件
	 //import { Router } from 'react-router';
	 //import { Provider } from 'react-redux';
    return (
      <Provider store={store}>
          <Router history={history} children={routes} />
      </Provider>
  );
};
```

4、创建store

```js

let reducer = reducers;
    let middleware = [];
    let finalCreateStore;
    let initialState = props;
    
		//中间件传递
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
	
	//触发页面延时加载数据
    stroe.dispatch(getArticlesLists())


    return stroe;
```


5、路由分发

```js
//import App from '../containners/App'
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

```

6、真正的页面容器

```js
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

```

```js

export default class commentContainner extends Component {

    shouldComponentUpdate(nextProps){
    		//防止每次状态机改变都重新渲染组件
    		//其他对象属性可通过 nextProps.someProps.id !=== this.props.someProps.id
    		//静态组件  return false；
        return nextProps.commentListResult !== this.props.commentListResult;
    }
    render() {
        console.log('render ------------- commentContainner')
        const {commentLists} = this.props
        return (
            <div>
                <CommentList listdatas = {commentLists}></CommentList>
            </div>
        )
    }
}

commentContainner.propTypes = {
    commentListResult:PropTypes.array,
    commentLists:PropTypes.array
}


function mapStateToProps(state){
    console.log(state.result.comments);
    return {
    		//由于实际渲染的list每次都是新生成的数组，需要多缓存一个不可变的数组，在组件刷新判断时作为依据
        commentListResult:state.result.comments,

        commentLists: getAllComments(state)
    }
}


```



7、reducers定义

```js

import { combineReducers } from 'redux';
import * as types from '../constants/actionTyeps'
import result from './result'
import entities from './entity'

//合并两个子reducer,每个子reducer都会只获取到各自作用域的state
export default combineReducers({
  result,
  entities
});

```

result.jsx

```js

import { RECEIVE_ENTITIES } from '../constants/actionTyeps'
import { combineReducers } from 'redux';
import articles from './article'

export default combineReducers({
    articles
});

```

entity.jsx

```js

import { RECEIVE_ENTITIES } from '../constants/actionTyeps'
import lodash from 'lodash'

const initialState = {
    articles: {},
}

export default function entities(state = initialState, action) {

	//state  只包含了entities下的属性
    switch (action.type) {
        case RECEIVE_ENTITIES:
            return lodash.merge(state, action.entities)
        default:
            return state
    }
}

```
8、react组件正常写， 例如


```js

import React, { Component, PropTypes } from 'react'
import { List, ListItem } from 'amazeui-react'

export default class ListInstance extends Component {
    render() {

        return (
            <List>
            //属性会从父容器传递下来
                {this.props.listdatas.map(cell =>
                    <ListItem key={cell.id}>
                        {cell.content}
                    </ListItem>
                )}
            </List>
        )
    }
}

ListInstance.propTypes = {
    listdatas:PropTypes.array
}

```

9、数据范式化

```js
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

```

```js
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
```
