import React, { Component } from 'react';

class Leadland extends Component {

    constructor(props) {
        super(props)
        this.text = props.text
    }

    render() {
        return (
            <div className='block'>
                {this.text}
            </div>
        )
    }
}

export default Leadland
   