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
        const message = result ? 'Copied successful.' : 'Copied failure,your browser dosn\'t support this features.';
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
