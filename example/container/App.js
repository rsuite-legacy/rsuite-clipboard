import React, { Component } from 'react';
import { Header, Navbar, Nav, Row, Col, IconFont } from 'rsuite';

class App extends Component {
    render() {
        return (
            <div className="doc-page">
                <Header inverse>
                    <div className="container">
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#"><span className="prefix">R</span>Suite Clipboard</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <Nav.Item href="https://github.com/rsuite/rsuite-clipboard">
                                    <IconFont icon="github"/>
                                    {' GitHub'}
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Header>

                <div className="container">
                    <h1>{'<Clipboard/>'}</h1>
                    <hr/>
                    <p>
                        <a href="https://www.bithound.io/github/rsuite/rsuite-clipboard">
                            <img src="https://www.bithound.io/github/rsuite/rsuite-clipboard/badges/score.svg"
                                 alt="bitHound Overall Score"
                            />
                        </a>
                        {' '}
                        <a href="https://badge.fury.io/js/rsuite-clipboard">
                            <img src="https://badge.fury.io/js/rsuite-clipboard.svg" alt="npm version"/>
                        </a>
                    </p>
                    <p>Modern copy to clipboard for react.</p>
                    {this.props.children}
                </div>

                <div className="footer">
                    <div className="container">


                        Powered by<a href="http://www.hypers.com" target="_blank">Hypers FE</a>

                        <a href="https://github.com/rsuite/rsuite" target="_blank"><IconFont icon='github'/></a>

                        <a href="https://discord.gg/GmPXTH3">
                            <img
                                src="https://camo.githubusercontent.com/10eef7528c50293db11a09f64f7c32d7b230ef8f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446973636f72642d4a6f696e253230636861742532302545322538362539322d3733386264372e737667"
                                alt="Discord"
                                data-canonical-src="https://img.shields.io/badge/Discord-Join%20chat%20%E2%86%92-738bd7.svg"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
