import { useState }from 'react';

const useTareas = (inicilValue) => {
  const [ tareas, setTareas ] = useState(inicilValue);

/*   const numberTarea = () => {
    const iterator = tareas.keys();

    for (const key of iterator) {
      return (key);
    }
  } */

  const numberTarea = (id) => {
    const todoIndex = tareas.findIndex(todo => todo.id === id);
   return todoIndex
 }



  const addTarea = (newTarea) => {
    newTarea.id = Date.now();
    setTareas([
      ...tareas,
      newTarea,
    ])
  }
  const deleteTarea = (tareaid) => {
    setTareas(tareas.filter(tarea => tarea.id !== tareaid ))
  }

  return [
    tareas, 
    addTarea,
    deleteTarea,
    numberTarea
  ]
}

export default useTareas

