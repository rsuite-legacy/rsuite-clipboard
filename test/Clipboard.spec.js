import React from 'react';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';
import Clipboard from '../src/component/Clipboard';
import select from '../src/util';

const setup = (props) => {
    const dom = <Clipboard {...props}/>;
    const wrapper = shallow(dom);
    const staticRender = render(dom);
    const fullRender = mount(dom);
    return {
        wrapper,
        staticRender,
        fullRender
    };
};

describe('Clipborad Test', () => {
    it('Should output a Tag', () => {
        const text = 'Copy Test';
        const { fullRender } = setup({
            text,
            children: (
                <div id="test">Test</div>
            )
        });
        expect(fullRender.find('#test').exists()).toBe(true);
        fullRender.simulate('click');
    });
});

