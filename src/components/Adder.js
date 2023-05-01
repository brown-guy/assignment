import { v4 as uuidv4 } from 'uuid';
import './Adder.css'

export default function Adder({ task, setTask, todos, setTodos }) {


    const onInputChange = (event) => {
        setTask(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, { id: uuidv4(), title: task }])
        setTask('');
    }
    return (
        <form className="form-inline m-3" onSubmit={onFormSubmit}>
            <div className="form-group row m-1">


                <input
                    value={task} onChange={onInputChange}
                    type="text" className="form-control w-50 mb-2 col-6" id="name" placeholder="Enter task" />
                <div className='col-3'></div>
                <button type="submit" className="btn add border-success mb-2 col-3">Add</button>
            </div>

        </form>

        // <form className="m-3" onSubmit={addItem}>
        // <div className="form-group my-2">

        //   <input value={task}
        //     onChange={(e) => setTask(e.target.value)}
        //     type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter task" />
        //   <button type="submit" className="btn btn-primary">Add</button>
        // </div>

    )
}