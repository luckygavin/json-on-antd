import React from 'react';
import ReactDOM from 'react-dom';

export default {
    init(config, selector) {
        let target = document.getElementById(selector);


        
        return ReactDOM.render(config, target);
    }
};
