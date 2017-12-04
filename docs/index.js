// 解决 IE 11 兼容性问题
import 'babel-polyfill';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Markdown } from 'react-markdown-reader';
import CodeView from 'react-code-view';
import { findDOMNode } from 'react-dom';
import { Button, FormControl, IconFont } from 'rsuite';
import NotificationSystem from 'react-notification-system';
import { PageContainer } from 'rsuite-docs';


import './less/index.less';
import Clipboard from '../src/main';


class App extends Component {
    render() {
        return (
            <PageContainer
                activeKey="Clipboard"
                githubURL="https://github.com/rsuite/rsuite-clipboard"
            >
                <Markdown>{require('../README.md')}</Markdown>


                <CodeView
                    source={require('./md/BasicClipboard.md')}
                    dependencies={{
                        Component,
                        findDOMNode,
                        Button,
                        FormControl,
                        IconFont,
                        Clipboard,
                        NotificationSystem
                    }}
                />

                <Markdown>{require('./md/API.md')}</Markdown>

            </PageContainer>
        );
    }
}

ReactDOM.render(<App/>,
    document.getElementById('app')
);
