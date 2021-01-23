import React from 'react';
import Bar from '../Bar/Bar.js';

function generateBar() {
    const arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(<Bar />);
    }
    return arr;
}

export default generateBar