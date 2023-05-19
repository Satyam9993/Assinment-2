import React from 'react'
import { useDispatch } from 'react-redux';
import { setMakedDoneTodo, setRemoveTodo } from '../state';
import Button from './Button';

const TodoRow = ({todo}) => {
  const dispatch = useDispatch();

  const markedtodo = (id) => {
    dispatch(setMakedDoneTodo({ todoId: id }));
  };

  const deleteTodo = () => {
    dispatch(setRemoveTodo({ todoId: todo.id }));
  };

  return (
    <tr
      className="">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={todo.done} onClick={() => markedtodo(todo.id)} />
          <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
        </div>
      </td>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {todo.todo}
      </th>
      <td className="px-6 py-4 text-right">
        <Button type={"sm"} name={"X"} onClickfn={deleteTodo}/>
      </td>
    </tr>
  )
}

export default TodoRow;