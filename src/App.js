import React from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent'
import KeypadComponent from './components/KeypadComponent'



export class App extends React.Component {
  state={
    result:''
  }
  onClick=button=> {
    if (button==="=") {
      this.calculate()
    }
    else if(button==="C") {
      this.reset()
    }
    else if(button==="CE") {
      this.backSpace()
    }
    else {
      const total=this.state.result+button
      console.log(total)
      this.setState({
          result:total
          
      })
    }

  }
  calculate=()=> {
    try {
      this.setState({
        result:(eval(this.state.result) || " ") +" "
      })
    }
    catch(e) {
      this.setState({
        result:"error"
      })
    }
  }
  reset=()=> {
    this.setState({
      result:''
    })
  }
  backSpace=() => {
    if (this.state.result===0) {
      this.setState({
        result:''
      })
    }
    else {
    this.setState({
      result:this.state.result.slice(0,-1)
    })
  }
}
  render() {
    return (
      <div className="maindata">
          
          <ResultComponent result={this.state.result} />
          <KeypadComponent onClick={this.onClick}/>
      </div>
    )
  }
}

export default App

