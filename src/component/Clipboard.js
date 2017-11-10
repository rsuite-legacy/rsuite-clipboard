import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { copy, select } from '../util';

class Clipboard extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        children: PropTypes.element.isRequired,
        onCopy: PropTypes.func
    };
    static copy = copy;
    static select = select;

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    handleCopy(text, prevDom) {
        return copy(text, prevDom);
    }

    onClick(event) {
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
}

export default Clipboard;
