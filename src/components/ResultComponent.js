import React, { Component } from 'react'

export class ResultComponent extends Component {
    render() {
        let { result }=this.props
      
      return (
        <div className="result">
          <input id="display" value={result}/>
        </div>
      )
    }
}

export default ResultComponent
