import Counter from '../Counter/Counter';
import DivClick from '../DivClick/DivClick';
import StudentList from '../StudentList/StudentList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='title'>CyberBionic systematics</h1>
      <h3 className='title'>Welcome</h3>
      <StudentList />
      <Counter />
      <DivClick />
    </div>
  );
}

export default App;
