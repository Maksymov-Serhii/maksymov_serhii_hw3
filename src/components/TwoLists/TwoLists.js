import React from "react";
import "./twoLists.css"

class TwoLists extends React.Component {

  constructor() {
    super();
    this.state = {
      reactStudents: ["Maksymov Serhii", "Isyk Volodymyr", "Ponomarenko Oleksandr", "Chayka Vitaliy", "Kot Roman"],
      angularStudents: ["Huskova Anna", "Mazurik Diana", "Cherniavska Olga", "Rivchachenko Mykyta", "Mazur Ekaterina"],
    };
  }

  render() {

    return (
      <div className="some-component">
        <h2>Component for changing list items</h2>

        <div className="div-list">
          <p>React student list:</p>

          <ul>    
            
            {this.state.reactStudents.map((student, index) => {
              return (
                <li key={index}>{ student }</li>
                )
              })}
          </ul>

          <button onClick={() => {            
            const reactList = this.state.reactStudents;
            const angularList = this.state.angularStudents;

            if (reactList.length > 0) {
              angularList.push(reactList[0]);
              reactList.shift(reactList[0]);
              this.setState({reactStudents: reactList, angularStudents: angularList})
            }
          
          }}>Move first student to Angular group</button>
        </div>

        <div className="div-list">
          <p>Angular student list:</p>
          <ul>          
            {this.state.angularStudents.map((student, index) => {
              return (
                <li key={index}>{ student }</li>
              )
            })}
          </ul>

          <button onClick={() => {
            const reactList = this.state.reactStudents;
            const angularList = this.state.angularStudents;

            if (angularList.length > 0) {
              reactList.push(angularList[0]);
              angularList.shift(angularList[0]);
              this.setState({reactStudents: reactList, angularStudents: angularList})
            }
          }}>Move first student to React group</button>
        </div>

      </div>
    )
  }
}

export default TwoLists;