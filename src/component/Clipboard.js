/**
 * Created by Godfery on 2017/3/24.
 */
import React, { PropTypes } from 'react';
import { copy, select } from '../util';

const Clipboard = React.createClass({
    propTypes: {
        text: PropTypes.string.isRequired,
        children: PropTypes.element.isRequired,
        onCopy: PropTypes.func
    },
    getDefaultProps(){
        return {
            action: 'copy'
        };
    },
    handleCopy(text){
        return copy(text);
    },
    onClick(event){
        const {
            text,
            onCopy,
            children
        } = this.props;

        const elem = React.Children.only(children);
        const { onClick } = elem.props;
        const result = this.handleCopy(text);

        onCopy && onCopy(text, result);
        onClick && onClick(event);
    },
    render(){
        const {
            text,
            onCopy,
            children,
            ...props
        } = this.props;
        const elem = React.Children.only(children);

        return React.cloneElement(elem, {
            ...props,
            onClick: this.onClick
        });
    }
});

Clipboard.copy = copy;
Clipboard.select = select;

export default Clipboard;
