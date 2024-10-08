import './App.css';
import React, {useState} from 'react';
import TodoTable from './components/TodoTable';
import {NewTodoForm} from './components/NewTodoForm';

export const App = () => {
  const [todos,setTodos] =useState([
    {rowNumber:1, rowDescription:'Feed puppy',rowAssigned:'User One'},
    {rowNumber:2, rowDescription:'Water plants',rowAssigned:'User Two'},
    {rowNumber:3, rowDescription:'Make dinner',rowAssigned:'User Three'},
    {rowNumber:4, rowDescription:'Get haircut',rowAssigned:'User Four'}
  ])

  const addTodo= (description:string,assigned:string) =>{
    // console.log('Add todo button is clicked');
    let rowNumber=0;
    if(todos.length >0){
        rowNumber =todos[todos.length-1].rowNumber+1;
    }else{
      rowNumber=1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowAssigned:assigned,
      rowDescription:description
    }
   // todos.push(newTodo);
   setTodos(todos => [...todos,newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber:number) =>{
    let filtered =todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  const[showAddTodoForm,setShowAddTodoForm]=useState(false);

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>    
          <button className='btn btn-primary' onClick={()=>setShowAddTodoForm(!showAddTodoForm)}>
            {showAddTodoForm?'Close New Todo':'Add New Todo'}  
          </button>   
           {showAddTodoForm && <NewTodoForm addTodo={addTodo}/> } 
          
      </div>
      </div>
    </div>
  );
}