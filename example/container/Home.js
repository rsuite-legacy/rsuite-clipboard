import React, { Component } from 'react';
import { Markdown } from 'markdownloader';

import { BasicClipboard } from '../component';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Example</h2>
                <div className="row">
                    <div className="col-md-8">
                        <Markdown>{require('../md/basic.md')}</Markdown>
                    </div>
                    <div className="col-md-4">
                        <BasicClipboard/>
                    </div>
                </div>
                <h2>Document</h2>
                <div className="row">
                    <div className="col-md-12">
                        <Markdown>{require('../md/props.md')}</Markdown>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
