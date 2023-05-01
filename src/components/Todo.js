import React from 'react'
import { FaTrash } from "react-icons/fa";
import './Todo.css'

const Todo = ({ todos, setTodos }) => {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    return (
        <div className='task'>
            {todos.map((todo) => (
                <div className='rounded border border-success mx-3 mb-2 task-item' key={todo.id}>
                    <div className='d-flex justify-content-between mx-2 my-1'>
                        {todo.title}
                        <button className=' rounded border' onClick={() => handleDelete(todo)}>
                            <FaTrash />
                        </button>
                    </div>
                </div>

            ))
            }
        </div >
    )
}

export default Todo

// export default function Todo(props) {

//     return (

//         <div className='w-50 m-auto'>
//             <div className='rounded rounded-dark bg-primary'>
//                 <div className='row text-center'>
//                     <p>
//                         {props.content}
//                     </p>
//                     <i class="bi bi-trash"></i>
//                 </div>
//             </div>
//         </div>
//     );
// }