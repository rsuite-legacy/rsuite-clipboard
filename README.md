#  Clipboard
[![bitHound Overall Score](https://www.bithound.io/github/rsuite/rsuite-clipboard/badges/score.svg)](https://www.bithound.io/github/rsuite/rsuite-clipboard)
[![npm version](https://badge.fury.io/js/rsuite-clipboard.svg)](https://badge.fury.io/js/rsuite-clipboard)

[Home Page](hrrp://rsuite.github.io/rsuite-clipboard)

|Prop name|Type|Default|Description|
|---|---|---|---|
|text|`String`|--|Text to be copied to clipboard.|
|children|`String`|--|CopyToClipboard is a simple wrapping component, it does not render any tags, so it requires the only child element to be present, which will be used to capture clicks.|
|onCopy|`function(text,result)`|--|Optional callback, will be called when text is copied|

## Clipboard.copy
If you don't want to use `Clipboard`, you can execute this function to copy text in clipboard.
```
 @param {String} text - Text to be copied to clipboard. 
 @return {Boolean} - Whether copy success.
```

##  Clipboard.select
Programmatically select the text of a HTML element.
```
 @param {HTMLElement} Element
```

## Example

### Install
```bash
npm install rsuite-clipboard --save
```
### Usage
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


