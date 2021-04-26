import React, { createContext,useState } from 'react'
import {useTodos,useProjects, useProjectWithStats} from '../hooks'
const TodoContext=createContext()

function TodoContextProvider({children})
{
    const defaultProject='today'

    const [selectedProject, setSelectedProject] = useState(defaultProject)
    const [selectedTodo,setSelectedTodo]=useState(undefined)
    const todos=useTodos()
    const projects=useProjects()
    const projectsWithStats=useProjectWithStats(projects,todos)

    return(
        <TodoContext.Provider
         value={
            {
                defaultProject,
                selectedProject,
                setSelectedProject,
                todos,
                projects:projectsWithStats,
                selectedTodo,
                setSelectedTodo
            }
         }
        >
            {children}
        </TodoContext.Provider>
    )
}

export  {TodoContextProvider,TodoContext}