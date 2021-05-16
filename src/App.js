
import './App.css';

import SideBar from './components/SideBar';
import Main from './components/Main';
import User from './components/User';
import AddNewTodo from './components/AddNewTodo';
import Calendar from './components/Calendar';
import Projects from './components/Projects';
import Todos from './components/Todos';
import EditTodos from './components/EditTodos';


function App() {
  return (
    <div className="App" >
     <SideBar >
       <User/>
       <AddNewTodo/>
       <Calendar/>
       <Projects/>
     </SideBar>
     <Main>
       <Todos/>
       <EditTodos/>
     </Main>
    </div>
  );
}

export default App;
