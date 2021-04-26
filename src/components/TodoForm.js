import React from "react";

import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function TodoForm({
  handleSubmit,
  heading = false,
  text,
  setText,
  date,
  setDate,
  time,
  setTime,
  projects,
  showButtons = false,
  setShowModal,
  todoProject,
  setTodoProject
}) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form onSubmit={handleSubmit} className="TodoForm">
        <div className="text">
          {
              heading&&
          <h3>{heading}</h3>
          }
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Todo..."
            autoFocus
          />
        </div>
        <div className="remind">
          <Bell />
          <p>Remind me!</p>
        </div>
        <div className="pick-day">
          <div className="title">
            <CalendarDay />
            <p>Choose a day!</p>
          </div>
          <DatePicker value={date} onChange={(day) => setDate(day)} />
        </div>
        <div className="pick-time">
          <div className="title">
            <Clock />
            <p>Choose time!</p>
          </div>
          <TimePicker value={time} onChange={(time) => setTime(time)} />
        </div>
        <div className="pick-project">
          <div className="title">
            <Palette />
            <p>Choose a project!</p>
          </div>
          <div className="projects">
            {
              projects.length>0?
              projects.map((projects) => (
              <div className={`project ${todoProject===projects.name?"active" : ""}`} key={projects.id} onClick={()=>setTodoProject(projects.name)} >
                {projects.name}
              </div>
            ))
            :
            <div style={{color:'red'}}>
              Please add a project before proceeding
            </div>
            }
          </div>
        </div>
        {
            showButtons && 
          <div>
                <div className="cancel" onClick={(e) => setShowModal(false)}>
                    <X size="40" />
                </div>
                <div className="confirm">
                    <button>+ Add Todo</button>
                </div>
          </div>
        }
      </form>
    </MuiPickersUtilsProvider>
  );
}

export default TodoForm;
