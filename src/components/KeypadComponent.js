import React, { Component } from "react";

export class KeypadComponent extends Component {
    onClickButton = (e) => {
    this.props.onClick(e.target.name);
  };
  
  render() {
      
    return (
      <div>
        <div>
        <button name="(" onClick={this.onClickButton} id="" className="button">
          (
        </button>
        <button name="CE" onClick={this.onClickButton} id=""  className="button">
          CE
        </button>
        <button name="C" onClick={this.onClickButton} id="clear"  className="button">
          C
        </button>
        <button name=")" onClick={this.onClickButton} id=""  className="button">
          )
        </button>
        <br />
        </div>
        <div>
        <button name="1" onClick={this.onClickButton} id="one"  className="button">
          1
        </button>
        <button name="2" onClick={this.onClickButton} id="two"  className="button">
          2
        </button>
        <button name="3" onClick={this.onClickButton} id="three"  className="button">
          3
        </button>
        <button name="+" onClick={this.onClickButton} id="add" className="button">
          +
        </button>
        <br />
        </div>
        <div>
        <button name="4" onClick={this.onClickButton} id="four" className="button">
          4
        </button>
        <button name="5" onClick={this.onClickButton} id="five" className="button">
          5
        </button>
        <button name="6" onClick={this.onClickButton} id="six" className="button">
          6
        </button>
        <button name="-" onClick={this.onClickButton} id="subtract" className="button">
          -
        </button>
        <br />
        </div>
        <div>
        <button name="7" onClick={this.onClickButton} id="seven" className="button">
          7
        </button>
        <button name="8" onClick={this.onClickButton} id="eight" className="button">
          8
        </button>
        <button name="9" onClick={this.onClickButton} id="nine" className="button">
          9
        </button>
        <button name="*" onClick={this.onClickButton} id="multiply" className="button">
          X
        </button>
        <br />
        </div>
        <div>
        <button name="." onClick={this.onClickButton} id="decimal" className="button">
          .
        </button>
        <button name="0" onClick={this.onClickButton} id="zero" className="button">
          0
        </button>
        <button name="=" onClick={this.onClickButton} id="equals" className="button">
          =
        </button>
        <button name="/" onClick={this.onClickButton} id="divide" className="button">
          ÷
        </button>
        <br />
        </div>
      </div>
    );
  }
}

export default KeypadComponent;
