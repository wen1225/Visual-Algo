import React from 'react';
import generateBar from './GenerateBar.js';

class BarManager extends React.Component {
    render() {
        return (
            <>
            {generateBar()}
            </>
        );
    }
}

export default BarManager;