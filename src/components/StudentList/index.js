import React from "react";
import "./index.css"

class StudentList extends React.Component {

  

  render() {

    const students = [
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

    return (
      <div className="some-component">
        <h2>Component for displaying a list of names</h2>
        <ol>
          <p>Student list:</p>
          
          {students.map(student => {
            return (
              <li key={student.id}>{ student.lastName } { student.firstName }</li>
            )
          })}
        </ol>
      </div>
    )
  }
}

export default StudentList;
