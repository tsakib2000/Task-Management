/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import moment from "moment";

const TaskCard = ({task,onDelete}) => {

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 space-y-4">
        <h3 className="text-lg font-bold">{task.title}</h3>
        <p className="text-gray-600 font-semibold">{task.description}</p>
        <p className="text-gray-600 text-sm">{moment(task?.creationTime).format("dddd, MMMM Do YYYY")}</p>

        <div className="mt-4 flex space-x-2">
          <Link
            to={`/task/${task._id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update
          </Link>
          <button
           onClick={()=>onDelete(task._id)}
            className=" btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    );
};

export default TaskCard;