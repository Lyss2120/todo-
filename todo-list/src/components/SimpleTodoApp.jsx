import { useState } from "react";
import TodosLeft from "./TodosLeft";
import '../styles/SimpleTodo.css';
import { FaTimes } from 'react-icons/fa';


const initialSt = [
    { id: 1, name: 'despertar' },
    { id: 2, name: 'desayunar' },
    { id: 3, name: 'hacer aseo' },
]

const SimpleTodoApp = () => {

    const [tareas, setTareas] = useState(initialSt);
    const [name, setName] = useState('');

    const getId = () => {
        return tareas.length + 1;
    }

    const deleteTareaById = (id) => {
        //console.log(id);
        const result = tareas.filter((tarea) => tarea.id !== id);
        setTareas(result);
        console.log('Eliminado!');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTareas = tareas.concat({ id: getId(), name: name })
        setTareas(newTareas);
        setName('');
        console.log('Creado con exito!', newTareas);
    }

    return (
        <>
            <div className="container-fluid wrap1">

                <div className="container wrap2">



                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center titulo text-muted">todos</h2>
                        </div>

                        <div className="w-50 col-md-12">
                            <div className=" bg-warning pb-1 mx-2 hojas-2">
                                <div className="bg-secondary pb-1 mx- hojas-1 ">
                                    <table className="col-md-8 table todos mb-0">
                                        <thead >
                                            <th scope="col" colspan="2" >
                                                <form onSubmit={handleSubmit} >
                                                    <div className=" i1">
                                                        <input type="text" className="" id="name" placeholder="Insert todo" value={name} onChange={(e) => setName(e.target.value)} />
                                                    </div>
                                                </form>
                                            </th>
                                        </thead>
                                        <tbody className="position-relative">
                                            {tareas.map((tarea, id) => {
                                                return (
                                                    <tr key={id} >
                                                        <td className="col">{tarea.name}</td>
                                                        <td className="col">
                                                            <button className="btn x btn-sm me-0 " onClick={() => deleteTareaById(tarea.id)}>
                                                                <FaTimes />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                            <TodosLeft tareas={tareas} />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SimpleTodoApp;