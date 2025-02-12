import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState(["eat", "take sower","new addition"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if(newTask.trim()!==""){//this  will check weather adding null or empty string
        setTask(t=>[...t, newTask]);//this is for update
        setNewTask("");
      }
    }
  function deleteTask(index) {
    const updatedTask=task.filter((_,i)=>i!==index);//found different method to do the same
    setTask(updatedTask);
    //setTask(t => [...t.slice(0, index), ...t.slice(index + 1)]) 
  }
  function moveTaskUp(index) {
    if (index > 0) {
        const updatedTask = [...task];
        [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];//this is array destructuring better than below 
        // const taskToMove = updatedTask[index];
        // updatedTask[index] = updatedTask[index - 1];
        // updatedTask[index - 1] = taskToMove;
        setTask(updatedTask);
    }
  }
  function moveTaskDown(index) {
    if (index < task.length - 1) {
        const updatedTask = [...task];
        [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
        setTask(updatedTask);
    }
  }
  return (
    <div className="to-do-list">
      <h1>TO DO LIST</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter the task"
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
