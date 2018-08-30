import React, { Component } from 'react';

export class Img extends Component {
    render() {
        return <img src={this.props.src} alt={this.props.alt} style={{ width: '100%', margin: 'auto', border: '2px solid #420dab', borderRadius: 10 }} />
    }
}