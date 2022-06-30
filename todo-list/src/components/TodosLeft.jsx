import React from 'react'

function TodosLeft(props) {
  return (
    <tr>  
      <td className="card-text"><small class="text-muted">{props.tareas.length} todos left</small></td>
    </tr>    
  )
  
}

export default TodosLeft;