import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {Page, Dialog, Button, ButtonArea} from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';

class App extends Component {
    state = {
        showIOS1: false,
        showIOS2: false,
        showAndroid1: false,
        showAndroid2: false,
        style1: {
            buttons: [
                {
                    label: 'Ok',
                    onClick: this.hideDialog.bind(this)
                }
            ]
        },
        style2: {
            title: 'Heading',
            buttons: [
                {
                    type: 'default',
                    label: 'Cancel',
                    onClick: this.hideDialog.bind(this)
                },
                {
                    type: 'primary',
                    label: 'Ok',
                    onClick: this.hideDialog.bind(this)
                }
            ]
        }
    };

    hideDialog() {
        this.setState({
            showIOS1: false,
            showIOS2: false,
            showAndroid1: false,
            showAndroid2: false,
        });
    }

    render() {
        return (
            <div className="dialog" title="Dialog" subTitle="对话框" spacing>
                <Button type="default" onClick={e => this.setState({showIOS1: true})}>iOS Style1</Button>
                <Button type="default" onClick={e => this.setState({showIOS2: true})}>iOS Style2</Button>
                <Button type="default" onClick={e => this.setState({showAndroid1: true})}>Android Style1</Button>
                <Button type="default" onClick={e => this.setState({showAndroid2: true})}>Android Style2</Button>

                {this.state.showIOS1 ? <div>
                    <Dialog type="ios" title={this.state.style1.title} buttons={this.state.style1.buttons}
                            show={this.state.showIOS1}>
                        This is iOS Style 1
                    </Dialog>
                </div> : null}
                <Dialog type="ios" title={this.state.style2.title} buttons={this.state.style2.buttons}
                        show={this.state.showIOS2}>
                    This is iOS Style 2
                </Dialog>

                <Dialog type="android" title={this.state.style1.title} buttons={this.state.style1.buttons}
                        show={this.state.showAndroid1}>
                    This is Android Style 1
                </Dialog>
                <Dialog type="android" title={this.state.style2.title} buttons={this.state.style2.buttons}
                        show={this.state.showAndroid2}>
                    This is Android Style 2
                </Dialog>
            </div>
        );
    }
}

export default App;
