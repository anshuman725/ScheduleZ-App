import React, { useContext, useState,useEffect } from "react";
import Modal from "./Modal";
import { TodoContext } from "../context";
import firebase from '../firebase'
import TodoForm from "./TodoForm";
import moment from "moment";
import randomColor from "randomcolor";
import {calendarItems} from '../constants'

function AddNewTodo() {
  const {projects,selectedProject } = useContext(TodoContext);
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [todoProject, setTodoProject] = useState(selectedProject);
  
  
  function handleSubmit(e) {
    e.preventDefault()
    if(text && !calendarItems.includes(todoProject))
    {
      firebase
      .firestore()
      .collection('todos')
      .add(
        {
          text:text,
          date:moment(date).format('MM/DD/YYYY'),
          day:moment(date).format('d'),
          time:moment(time).format('hh:mm A'),
          color:randomColor(),
          projectName:todoProject

        }
      )
      setShowModal(false)
      setText('')
      setTime(new Date())
      setDate(new Date())

    }
  }

  useEffect(() => {
    setTodoProject(selectedProject)
    // return () => {
      
    // }
  },[selectedProject])

  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+New</button>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TodoForm
          handleSubmit={handleSubmit}
          heading="Add new Todo"
          text={text}
          setText={setText}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          setShowModal={setShowModal}
          projects={projects}
          todoProject={todoProject}
          setTodoProject={setTodoProject}
          showButtons={true}
        />
      </Modal>
    </div>
  );
}

export default AddNewTodo;
