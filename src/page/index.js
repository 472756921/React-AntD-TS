import React from 'react';
import Styles from './index.css';

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
