class ResultComponent extends React.Component {
    render() {
      let { data }=this.props
      console.log(data)
      return (
        <div>
         
          <input id="display" value={data}/>
        </div>
      )
    }
  }
  
  class KeypadComponent extends React.Component {
    onClickButton=(e) => {
      let main=this.props.onClick(e.target.name)
    }
    render() {
      return (
        <div class="button">
          <button name="(" onClick={this.onClickButton} id="">(</button>
          <button name="CE" onClick={this.onClickButton} id="">CE</button>
          <button name="C" onClick={this.onClickButton} id="clear">C</button>               <button name=")" onClick={this.onClickButton} id="">)</button>
          <br />
          
          <button name="1" onClick={this.onClickButton}id="one">1</button>
          <button name="2" onClick={this.onClickButton} id="two">2</button>
          <button name="3" onClick={this.onClickButton} id="three">3</button>        <button name="+" onClick={this.onClickButton} id="add">+</button>
          <br />
          <button name="4" onClick={this.onClickButton} id="four">4</button>
          <button name="5" onClick={this.onClickButton} id="five">5</button>
          <button name="6" onClick={this.onClickButton} id="six">6</button>           <button name="-" onClick={this.onClickButton} id="subtract">-</button>
          <br />
          <button name="7" onClick={this.onClickButton} id="seven">7</button>
          <button name="8" onClick={this.onClickButton} id="eight">8</button>
          <button name="9" onClick={this.onClickButton} id="nine">9</button>           <button name="*" onClick={this.onClickButton} id="multiply">X</button>
          <br />
          <button name="." onClick={this.onClickButton} id="decimal">.</button>
          <button name="0" onClick={this.onClickButton} id="zero">0</button>
          <button name="=" onClick={this.onClickButton} id="equals">=</button>        <button name="/" onClick={this.onClickButton} id="divide">÷</button>
          <br />
        </div>
        
      )
    }
  }
  
  class App extends React.Component{
    state={
      data:0
    }
  onClick=button=> { 
    if(button==="=") {
      this.calculate() 
    } 
    else if (button==="C") {
      this.reset() 
    }
     else if (button==="CE") {
       this.backSpace() 
     }
     else {
       this.setState({
         data:this.state.data+button }) 
     } 
  }
   calculate=()=> {
     try {
       this.setState({
         data:(eval(this.state.data)||"")+"" 
       }) 
     } catch{
       this.setState({
         data:"error" 
       }) 
     } 
   }
    reset=()=> {
     this.setState({
       data:0 
     }) 
   }
    backSpace=() => {
      if (this.state.data===0) {
        this.setState({
          data:''
        })
      }
      else {
      this.setState({
        data:this.state.data.slice(0,-1)
      })
    }
  }
   
  
  
    render() {
      return (
        <div>
       <ResultComponent data={this.state.data}/>
       <KeypadComponent onClick={this.onClick}/>
        </div>
      )
    }
  }
  
  
  ReactDOM.render(<App />,document.getElementById("app"))




  <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>

  
<div id="app"></div>

https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js
https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js