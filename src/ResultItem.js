import React, { Component } from 'react';

class ResultItem extends Component {

    render() {
        return (
            <li>{this.props.item.name} | Website: {this.props.item.website}</li>
        );
    }
}

export default ResultItem