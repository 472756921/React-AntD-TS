import React from 'react';
const Styles = require('./index.less')

export default class app extends React.Component {
    render() {
        return (
            <div>
                <img src={require('../assets/logo.jpg')} />
                <div className={Styles.title}>Benson</div>
            </div>
        );
    }
}
