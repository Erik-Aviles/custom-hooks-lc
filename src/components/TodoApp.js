import React from 'react';
import useTareas from '../hooks/useTareas';
import '../styles/TodoApp.css';

const inicilTareas =[
  {id: 1, title: 'Aprender Node'},
  {id: 2, title: 'Aprender React'},
  {id: 3, title: 'Aprender Angular'},
  {id: 4, title: 'Aprender Express'},
]

const TodoApp = () => {
  const [ tareas, addTarea, deleteTarea] = useTareas(inicilTareas);


  return (
    <div className='content-todoApp'>
      <h2>Listas de tareas</h2>
      <ul>
        {tareas.map(tarea => (
           <li 
            className='list-tarea'
            key={tarea.id}>
            Tarea {tareas.lastIndexOf(tarea)+1}: {tarea.title}
            <button 
              className='list-tarea-delete_button'
              onClick={() => deleteTarea(tarea.id)}>
                Eliminar
            </button>
          </li>
        ))}
      </ul>
      <button onClick={()=> addTarea({title: 'Cambiar'},{title: 'lskdkd'})}>
        Agregar tarea

      </button>
    </div>
  )
}

export { TodoApp }
