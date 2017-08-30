import React from 'react';
import ReactDOM from 'react-dom';
import {message, notification} from 'uf';
import {Cache} from 'uf/utils';
import Factory from './factory.js';

export default {
    init(config, selector) {
        return ReactDOM.render(
            <Factory config={config} />,
            document.getElementById(selector));
    },
    get(name) {
        return Cache.get('cache-' + name);
    },
    message,
    notification
};
