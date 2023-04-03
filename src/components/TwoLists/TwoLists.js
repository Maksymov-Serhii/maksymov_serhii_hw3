import React from "react";
import "./twoLists.css"

class TwoLists extends React.Component {
  render() {

    const reactStudents = [
      {
        id: 101,
        firstName: "Serhii",
        lastName: "Maksymov",
      },
      {
        id: 1382956392,
        firstName: "Volodymyr",
        lastName: "Isyk",
      },
      {
        id: 1093203,
        firstName: "Oleksandr",
        lastName: "Ponomarenko",
      },
      {
        id: 185001,
        firstName: "Chayka",
        lastName: "Vitaliy",
      },
      {
        id: 103305,
        firstName: "Roman",
        lastName: "Kot",
      },
    ];

    const angularStudents = [
      {
        id: 1012,
        firstName: "Anna",
        lastName: "Huskova",
      },
      {
        id: 13829256392,
        firstName: "Diana",
        lastName: "Mazurik",
      },
      {
        id: 10932203,
        firstName: "Olga",
        lastName: "Cherniavska",
      },
      {
        id: 1850201,
        firstName: "Mykyta",
        lastName: "Rivchachenko",
      },
      {
        id: 10322305,
        firstName: "Ekaterina",
        lastName: "Mazur",
      },
    ];
    return (
      <div className="some-component">
        <h2>Component for changing list items</h2>

        <ul className="student-list">
          <p>React student list:</p>
          
          {reactStudents.map(student => {
            return (
              <li key={student.id}>{ student.lastName } { student.firstName }</li>
            )
          })}

          <button>Move first student to Angular group</button>
        </ul>

        <ul className="student-list">
          <p>Angular student list:</p>
          
          {angularStudents.map(student => {
            return (
              <li key={student.id}>{ student.lastName } { student.firstName }</li>
            )
          })}

          <button>Move first student to React group</button>
        </ul>

      </div>
    )
  }
}

export default TwoLists;