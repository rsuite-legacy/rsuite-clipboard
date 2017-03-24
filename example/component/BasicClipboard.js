import React from 'react';
import { findDOMNode } from 'react-dom';
import { Button, FormControl, IconFont } from 'rsuite';
import Clipboard from '../../src/main';
import NotificationSystem  from 'react-notification-system';

export default React.createClass({
    getInitialState(){
        return {
            text: 'git@github.com:rsuite/rsuite.git'
        };
    },
    handleChange(text){
        this.setState({ text });
    },
    handleCopy(text, result){
        Clipboard.select(findDOMNode(this._input));
        const message = result ? '已成功复制到剪切板' : '复制失败，浏览器暂不支持此功能';
        this._notificationSystem.addNotification({
            message,
            autoDismiss: 1.5,
            position: 'tc',
            level: 'success'
        });
    },
    render(){
        const { text } = this.state;
        return (
            <div className="clipboard-group">
                <FormControl type='text' value={text} onChange={this.handleChange} ref={ref => this._input = ref}/>
                <Clipboard text={text} onCopy={this.handleCopy}>
                    <Button shape='default'>
                        <IconFont icon="clipboard"/>
                    </Button>
                </Clipboard>
                <NotificationSystem ref={ref => this._notificationSystem = ref}/>
            </div>
        );
    }
});
