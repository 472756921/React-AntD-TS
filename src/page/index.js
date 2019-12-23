import { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Layout_U extends Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}
