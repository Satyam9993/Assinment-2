import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAddTodo } from './state';
import TodoRow from './components/TodoRow';
import Button from './components/Button';

const App = () => {
  const [text, setText] = useState("")
  const todoList = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const AddTodo = () => {
    if (text) {
      dispatch(setAddTodo({ todo: text }));
      setText("");
    }
  };

  const changetext = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-10 border-2">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-lef">
            <thead className="text-xs uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  TODO
                </th>
              </tr>
            </thead>
            <tbody>
              {todoList.length ? 
              todoList.map(todo => (
                <TodoRow todo={todo} />
              )): 
              <div className='text-md font-semibold mx-3 my-2'>
                No Data
              </div>}
            </tbody>
          </table>
          <div class="mb-6 mx-2 flex space-x-2">
            <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" value={text} onChange={changetext} />
            <Button type={"lg"} name={"Add"} onClickfn={AddTodo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;