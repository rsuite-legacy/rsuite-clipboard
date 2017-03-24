```javascript
import React from 'react';
import { findDOMNode } from 'react-dom';
import { Button, FormControl, IconFont } from 'rsuite';
import Clipboard from 'rsuite-clipboard';

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
        Clipboard.select(findDOMNode(this.refs.input));
        const message = result ? '已成功复制到剪切板' : '复制失败，浏览器暂不支持此功能';
        alert(message);
    },
    render(){
        const { text } = this.state;
        return (
            <div className="clipboard-group">
                <FormControl 
                             type='text' 
                             value={text} 
                             onChange={this.handleChange} 
                             ref="input"/>
                <Clipboard text={text} onCopy={this.handleCopy}>
                    <Button shape='default'>
                        <IconFont icon="clipboard"/>
                    </Button>
                </Clipboard>
            </div>
        );
    }
});

```
