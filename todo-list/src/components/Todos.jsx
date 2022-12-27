import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

function Todos({ deleteTareaById, id, text }) {
    return (
      <tr className='bordee p-5'>
            <td className='px-3 fs-6'>{text}</td>
            <div className='x px-4' onClick={() => deleteTareaById(id)}>
                <span className='fs-6 m-0 p-0'>
                    <FaTimes />
                </span>
            </div>
        </tr>
    )
}

Todos.propTypes = {
    text: PropTypes.string
  };

export default Todos;