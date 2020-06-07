import React, { Component } from 'react'
import './Clear.css' 

export default class Clear extends Component {
  
    render() {
        return (
          <div className="clear"
          onClick={() => this.props.handleClear()}
          >
           {this.props.children}
          </div>
        )
    }
}
