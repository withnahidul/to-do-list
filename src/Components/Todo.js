import React from 'react';
//, todo, todos, setTodos 
const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    //     const completeHandler = () => {
    //         setTodos(todos.map(item) => {
    //     if (item.id === ) {
    //         return {
    //             ...item, completed: !item.completed
    //         }
    //         return item;
    //     }

    // });
    //     }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            };
            return item;
        }));
    };
    const editeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            };
            return item;
        }));
    };
    //<li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>

            <button onClick={completeHandler} className='complete-btn' ><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
            <button onClick={editeHandler} className='trash-btn'><i className='fas fa-edit'></i></button>
        </div>
    );
};

export default Todo;