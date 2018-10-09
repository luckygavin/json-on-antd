/**
 * @file fieldset 封装
 */
import React from 'react';
import {BaseComponent} from 'src/base';

export default class Fieldset extends BaseComponent {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <fieldset {...this.__getCommonProps({className: 'uf-fieldset'})}>
            <legend>{this.__props.title}</legend>
            {this.__props.children}
        </fieldset>;
    }
}
