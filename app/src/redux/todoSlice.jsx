import React from 'react'
import {createSlice} from '@reduxjs/toolkit'

 const todoSlice=createSlice({
    name:'todos',
    initialState:{
        tasks:[],
        filter:'all'
    },
    reducers:{
        addTask(state,action){
            state.tasks.push(action.payload);
        },
        toggleTask(state,action){
           const task=state.tasks.find(task => task.id === action.payload)
           if(task){
            task.completed= !task.completed
           }
        },
        editTask(state,action){
            const {id,updatedTask} =action.payload;
            const index=state.tasks.findIndex(task => task.id === id)
            if(index !== -1){
                state.tasks[index].text= updatedTask;
            }
        },
        deleteTask(state,action){
            state.tasks= state.tasks.filter(task => task.id !== action.payload)
        },
        setFilter(state,action){
            state.filter= action.payload
        }
    
    }
 })

 export const{addTask,toggleTask,editTask,deleteTask,setFilter} = todoSlice.actions
 export default todoSlice.reducer
