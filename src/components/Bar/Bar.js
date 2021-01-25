import React from 'react';
import styles from './Bar.module.css';

class Bar extends React.Component {
    render() {
        return (
            <svg className={styles.container} viewBox="0 0 20 100" width="20" height="100">
                <rect className={styles.bar} x="0" y="0" rx="5" ry="5" width="100%" height="100%"/>
            </svg>
        );
    }
}

export default Bar;