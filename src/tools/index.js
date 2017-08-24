import React from 'react';
import ReactDOM from 'react-dom';
import Factory from './factory.js';

export default {
    init(config, selector) {
        return ReactDOM.render(
            <Factory config={config} />,
            document.getElementById(selector));
    }
};
