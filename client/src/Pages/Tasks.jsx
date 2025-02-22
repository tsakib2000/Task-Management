/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hook/useAxiosPublic";
import TaskCard from "../components/TaskCard";



const Tasks = () => {
    const {user}=useContext(AuthContext);
   
    const [tasks,setTasks]=useState([])
  
   
    const axiosPublic=useAxiosPublic()
    useEffect(()=>{
        fetchDataTodo();
        
        

    },[])
    const fetchDataTodo =async()=>{
        const data = await axiosPublic(`/task?email=${user.email}`)
        setTasks(data.data)
    }

const onDelete=(id)=>{
console.log(id);
}

const todo =tasks.filter((task) => task.status === "todo");
const inProgress =tasks.filter((task) => task.status === "inProgress");
const done =tasks.filter((task) => task.status === "done");
    return (<>
        <div className="min-h-screen  p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Manage Your Task</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* To-Do Card */}
          <div className="bg-gray-100 text-center p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">To-Do</h2>
      {
        todo?.map(task=><TaskCard key={task._id} task={task}  onDelete={onDelete}/>)
      }
          </div>
  
          {/* In Progress Card */}
          <div className="bg-gray-100 text-center p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">In Progress</h2>

     {
      inProgress?.map(task=><TaskCard key={task._id} task={task}  onDelete={onDelete}/>)
    }

          </div>
  
          {/* Done Card */}
          <div className="bg-gray-100 text-center p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Done</h2>
            {
        done?.map(task=><TaskCard key={task._id} task={task}  onDelete={onDelete}/>)
      }
          </div>
        </div>
      </div>


     

      </>
    );
};

export default Tasks;