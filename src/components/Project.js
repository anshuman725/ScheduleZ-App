import React, { useContext, useState } from "react";
import { XCircle, Pencil } from "react-bootstrap-icons";
import Modal from "./Modal";
import RenameProject from "./RenameProject";
import { TodoContext } from "../context";
import firebase from '../firebase'
// import RenameProject from './RenameProject'
function Project({ project, edit }) {
  const { defaultProject,selectedProject,setSelectedProject } = useContext(TodoContext);
  const [showModal, setShowModal] = useState(false);

  const deleteProject=(project)=>{
    firebase
    .firestore()
    .collection('projects')
    .doc(project.id)
    .delete()
    .then(()=>{
      firebase
      .firestore()
      .collection('todos')
      .where('name','==',project.name)
      .get()
      .then((querySnapshot)=>{
        querySnapshot.forEach(doc=>{
          doc.ref.delete()
        })
      })
    })
    .then(()=>{
      if(selectedProject===project.name)
      {
        setSelectedProject(defaultProject)
      }
    })
  }
  return (
    <div className="Project">
      <div className="name" onClick={() => setSelectedProject(project.name)} >
        {project.name}
      </div>
      <div className="btns">
        {edit ? (
          <div className="edit-delete">
            <span className="edit">
              <Pencil onClick={() => setShowModal(true)} size="13" />
            </span>
            <span className="delete"
              onClick={()=>deleteProject(project)}
            >
              <XCircle size="13" />
            </span>
          </div>
        ) : project.numOfTodos === 0 ? (
          ""
        ) : (
          <div className="total-todos">{project.numOfTodos}</div>
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <RenameProject project={project} setShowModal={setShowModal} />
      </Modal>
    </div>
  );
}

export default Project;
