import React from 'react';
//import {ReactComponent as BarImg} from './bar.svg';

class Bar extends React.Component {
    render() {
        return (
            <svg viewBox="0 0 20 100" width="20" height="100">
                <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%"/>
            </svg>
        );
    }
}

export default Bar;