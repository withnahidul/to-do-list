import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import Callender from './Components/Callender';
import Home from './Home';

function App() {

  //state here
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //run once when open
  useEffect(() => {
    getLocalTodos();
  }, []);

  //useEffect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //function part
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //save to localstorage
  const saveLocalTodos = () => {
    // if (localStorage.getItem("todos") === null) {
    //   localStorage.setItem("todos", JSON.stringify([]));
    // } else {
    localStorage.setItem("todos", JSON.stringify(todos));
    //}
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      // localStorage.setItem("todos", JSON.stringify(todos));
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <header>
        <h1>Nis Todo List</h1>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="callender" element={<Callender />} />
        </Routes> 
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}

      ></Form>
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}></TodoList>
    </div>
  );
}

export default App;
