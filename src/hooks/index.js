import { useState, useEffect } from 'react'
import firebase from '../firebase'

export function useTodos(){
    const [todos, setTodos] = useState([])

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('todos')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {
                return {
                    id : doc.id,
                    ...doc.data()
                }
            })
            setTodos(data)
        })

        return () => unsubscribe()
    }, [])

    return todos
}

export function useProjects(){
    const [projects, setProjects] = useState([])

   
    useEffect(() => {
     
        let unsubscribe = firebase
        .firestore()
        .collection('projects')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {

                

                return {
                    id : doc.id,
                    name : doc.data().name,
                    
                }
            })

            setProjects(data)
        })

        return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return projects
}

export function useProjectWithStats(projects,todos)
{
    const[projectsWithStats,setProjectsWithStats]=useState([])

    useEffect(() => {
       
        const data=projects.map((project)=>{
            return{
                numOfTodos:todos.filter(todo=>todo.projectName===project.name && !todo.checked).length,
                ...project
            }
        })
       setProjectsWithStats(data)
    }, [projects,todos])

    return projectsWithStats
}