import React from 'react';
import Bar from '../Bar/Bar.js';

class BarManager extends React.Component {
    generateBar() {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(<Bar />);
        }
        return arr;
    }

    render() {
        return (
            <>
            {this.generateBar()}
            </>
        );
    }
}

export default BarManager;