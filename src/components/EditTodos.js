import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context";
import TodoForm from "./TodoForm";
import firebase from '../firebase'


function EditTodos() {
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [todoProject, setTodoProject] = useState('');
  const { selectedTodo, projects } = useContext(TodoContext);
  // const projects = [
  //   { id: 1, name: "personal", numOfTodos: 0 },
  //   { id: 2, name: "work", numOfTodos: 1 },
  //   { id: 3, name: "other", numOfTodos: 2 },
  // ];

  useEffect(() => {
    if(selectedTodo)
    {
      
    setText(selectedTodo.text)
    setDate(moment(selectedTodo.date,'MM/DD/YYYY'))
    setTime(moment(selectedTodo.time,'hh:mm A,'))
    setTodoProject(selectedTodo.projectName)
    }
    
  }, [selectedTodo])

  useEffect(() => {
    if(selectedTodo)
    {
      firebase
      .firestore()
      .collection('todos')
      .doc(selectedTodo.id)
      .update({
        text,
        date:moment(date).format('MM/DD/YYYY'),
        day:moment(date).format('d'),
        time:moment(time).format('hh:mm A'),
        projectName:todoProject


      })
      
    }
    
  }, [text,date,time,todoProject])

  function handleSubmit(e) {}
  return (
    <div>
      {selectedTodo && (
        <div className="EditTodo">
          <div className="header">Edit Todo</div>
          <div className="container">
            <TodoForm
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              todoProject={todoProject}
              setTodoProject={setTodoProject}
              projects={projects}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EditTodos;
