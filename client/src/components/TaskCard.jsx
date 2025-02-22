/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const TaskCard = ({task}) => {

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
        <div className="mt-4 flex space-x-2">
          <Link
            to={`/task/${task._id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update
          </Link>
          <button
           
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    );
};

export default TaskCard;