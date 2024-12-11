import { FaTrash, FaCheck, FaTimes, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { markCompleted, markIncomplete, removeTodo, toggleTodo } from "../redux/actions";

const TodoItem = ({ todo, index }) => {
    const dispatch = useDispatch();

    return (
        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-4 py-2 gap-4">
            {/* Todo Text */}
            <div className="flex items-center">
                <span className="mr-4 text-gray-500">{index + 1}</span>
                <span
                    className={`mr-4 ${
                        todo.completed ? "line-through text-red-500" : "text-black"
                    }`}
                >
                    {todo.text}
                </span>
            </div>

            {/* Buttons */}
            <div className="space-x-3 ml-8">
                {/* Toggle Button */}
                <button
                    onClick={() => dispatch(toggleTodo(index))}
                    className="text-sm bg-purple-950 text-white sm:px-2 py-1 px-1 rounded"
                >
                    {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
                </button>

                {/* Mark Completed Button */}
                {!todo.completed && (
                    <button
                        onClick={() => dispatch(markCompleted(index))}
                        className="text-sm bg-green-600 text-white sm:px-2 py-1 px-1 rounded"
                    >
                        <FaCheck />
                    </button>
                )}

                {/* Mark Incomplete Button */}
                {todo.completed && (
                    <button
                        onClick={() => dispatch(markIncomplete(index))}
                        className="text-sm bg-yellow-500 text-white sm:px-2 py-1 px-1 rounded"
                    >
                        <FaTimes />
                    </button>
                )}

                {/* Remove Todo Button */}
                <button
                    onClick={() => dispatch(removeTodo(index))}
                    className="text-sm bg-red-600 text-white sm:px-2 py-1 px-1 rounded"
                >
                    <FaTrash />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;