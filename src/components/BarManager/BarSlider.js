import React from 'react';
import Bar from '../Bar/Bar.js';

class BarSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfBars: 5
        };
        this.handleChange = this.handleChange.bind(this);
        this.generateBars = this.generateBars.bind(this);
    }

    //Depending on the current value of the slider, the # of bar changes
    handleChange(event) {
        this.setState({
            numberOfBars: event.target.value
        })
    }

    generateBars() {
        const arr = [];
        for (let i = 0; i < this.state.numberOfBars; i++) {
            arr.push(<Bar />);
        }
        return arr;
    }

    render() {
        return (
            <>
            <input type="range" min="1" max="21" defaultValue="10" onChange={this.handleChange} />
            {this.generateBars()}
            </>
        );
    }
}

export default BarSlider;