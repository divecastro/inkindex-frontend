import React, { Component } from 'react';

class ResultItem extends Component {

    render() {
        return (
            <li>{this.props.item.name} | Ailment: {this.props.item.desc}</li>
        );
    }
}

export default ResultItem