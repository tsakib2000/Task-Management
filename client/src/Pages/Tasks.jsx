/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hook/useAxiosPublic";
import TaskCard from "../components/TaskCard";
import Swal from "sweetalert2";



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

const onDelete= (id)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {

      try{
        await axiosPublic.delete(`/task/${id}`)
        fetchDataTodo()
      }catch(err){
        Swal.fire(`${err.message}`)
      }


      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  })
}

const todo =tasks.filter((task) => task.status === "todo");
const inProgress =tasks.filter((task) => task.status === "inProgress");
const done =tasks.filter((task) => task.status === "done");
    return (<>
        <div className="min-h-screen  p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Manage Your Task</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* To-Do Card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4  text-center">To-Do</h2>
      {
        todo?.map(task=><TaskCard key={task._id} task={task}  onDelete={onDelete}/>)
      }
          </div>
  
          {/* In Progress Card */}
          <div className="bg-gray-100  p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4  text-center">In Progress</h2>

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