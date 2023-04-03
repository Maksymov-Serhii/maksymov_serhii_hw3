import Counter from '../Counter/Counter';
import DivClick from '../DivClick/DivClick';
import StudentList from '../StudentList/StudentList';
import TwoLists from '../TwoLists/TwoLists';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='title'>CyberBionic systematics</h1>
      <h3 className='title'>Welcome</h3>
      <StudentList />
      <Counter />
      <TwoLists />
      <DivClick />
    </div>
  );
}

export default App;
