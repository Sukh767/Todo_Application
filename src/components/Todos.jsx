import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { markAsDone, removeTodo } from '../features/Todo/todoSlice';

const Todos = () => {
  const todos = useSelector(state => state.todos);  // Ensure you're accessing state.todo.todos
  const dispatch = useDispatch();

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-white mb-5">Todo List</h2>
      <ul className="list-none space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center px-4 py-2 rounded shadow-md
              ${todo.isDone ? 'bg-green-900' : 'bg-zinc-800'}
            `}
          >
            <div className="text-white">{todo.task}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
                onClick={() => dispatch(markAsDone(todo.id))}
                className={`text-white py-1 px-4 rounded 
                  ${todo.isDone ? 'bg-teal-400 hover:bg-teal-600' : 'bg-green-500 hover:bg-green-600'}`}
              >
                {todo.isDone ? 'Undo' : 'Mark as Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
