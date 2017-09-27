/**
 * @file 路由 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect, Link, IndexRoute, IndexRedirect, IndexLink, hashHistory} from 'react-router';
import {Utils} from 'uf/utils';

// Router
export default class NewRouter extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    getItems(list) {
        return list.map(item=>
            <Route {...item}>
                {item.index && (<IndexRedirect to={item.index}/>)}
                {item.children && this.getItems(item.children)}
                {/* <Route path="*" component={ErrorPage} /> */}
            </Route>
        );
    }
    render() {
        let route = this.props.route || {};
        console.log(route);
        return <Router history={hashHistory}>
            <Route path="/" {...route}>
                {route.index && (
                    <IndexRedirect to={route.index}/>
                )}
                {this.getItems(route.children || [])}
            </Route>
        </Router>;
    }
}
