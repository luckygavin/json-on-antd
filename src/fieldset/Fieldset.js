/**
 * @file fieldset 封装
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';

export default class Fieldset extends BaseComponent {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <fieldset className={'uf-fieldset ' + (this.__props.className || '')} style={this.__props.style}>
            <legend>{this.__props.title}</legend>
            {this.__props.children}
        </fieldset>;
    }
}
