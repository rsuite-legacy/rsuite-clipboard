## 示例
<!--start-code-->
```js
class BasicClipboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'git@github.com:rsuite/rsuite.git'
        };
    }

    handleChange(text) {
        this.setState({ text });
    }

    handleCopy(text, result) {
        Clipboard.select(findDOMNode(this._input));
        const message = result ? 'Copied successful.' : 'Copied failure,your browser dosn\'t support this features.';
        this._notificationSystem.addNotification({
            message,
            autoDismiss: 1.5,
            position: 'tc',
            level: 'success'
        });
    }

    render() {
        const { text } = this.state;
        return (
            <div className="clipboard-group">
                <FormControl
                    type='text'
                    value={text}
                    onChange={this.handleChange.bind(this)}
                    ref={ref => this._input = ref}/>
                <Clipboard text={text} onCopy={this.handleCopy.bind(this)}>
                    <Button shape='default'>
                        <IconFont icon="clipboard"/>
                    </Button>
                </Clipboard>
                <NotificationSystem ref={ref => this._notificationSystem = ref}/>
            </div>
        );
    }
};
ReactDOM.render(<BasicClipboard />);
```
<!--end-code-->
