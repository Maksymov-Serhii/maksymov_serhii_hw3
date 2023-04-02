import React from "react";
import "./divClick.css"

class DivClick extends React.Component {
  constructor() {
    super();
    this.state = { lastClickedElement: '' };
  }
  render() {
    return (
      <div className="some-component" onClick={() => {
        console.log("Div clicked");
        this.setState({ lastClickedElement: "Div clicked" })
        }}>

        <h2>Clickable component</h2>
        <p>{this.state.lastClickedElement}</p>
        
        <button className="div-click-button" onClick={(event) => {
          event.stopPropagation();
          console.log("Button clicked");
          this.setState({ lastClickedElement: "Button clicked" });
        }}>Click me, please.</button>
      </div>
    )
  }
}

export default DivClick;