import React from "react";
import "./divClick.css"

class DivClick extends React.Component {
  render() {
    return (
      <div className="some-component" onClick={() => console.log("Div clicked")}>
        <h2>Clickable component</h2>
        <button className="div-click-button" onClick={(event) => {
          event.stopPropagation();
          console.log("Button clicked");
        }}>Click me, please.</button>
      </div>
    )
  }
}

export default DivClick;