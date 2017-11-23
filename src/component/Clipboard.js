import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { copy, select } from '../util';
import _omit from 'lodash/omit';

const propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    onCopy: PropTypes.func
};

class Clipboard extends Component {
    static copy = copy;
    static select = select;

    constructor(props) {
        super(props);
    }

    handleCopy = (text, prevDom) => {
        return copy(text, prevDom);
    }

    handleClick = (event) => {
        const {
            text,
            onCopy,
            children
        } = this.props;

        const elem = React.Children.only(children);
        const { onClick } = elem.props;
        const result = this.handleCopy(text, event.target);
        onCopy && onCopy(text, result);
        onClick && onClick(event);
    }

    render() {
        const elem = React.Children.only(this.props.children);
        const elementProps = _omit(this.props, Object.keys(propTypes));
        return React.cloneElement(elem, {
            ...elementProps,
            onClick: this.handleClick
        });
    }
}

Clipboard.propTypes = propTypes;

export default Clipboard;
