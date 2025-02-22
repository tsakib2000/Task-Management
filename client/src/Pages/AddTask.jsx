
import { useContext } from "react";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";


const AddTask = () => {
    const {user}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic();
  
const handleAddTask=async(e)=>{
    e.preventDefault()
const form = e.target;
const title=form.title.value;
const description=form.description.value;
const status='todo';
const email=user.email
const creationTime=new Date()
const task={title,description,status,email,creationTime}

   await axiosPublic.post('/task',task)
   
form.reset()

}
    return (
        <div className="">
       <div className=" bg-opacity-50 flex items-center justify-center">
  <div className="bg-white rounded-lg p-6 w-96">
    <h2 className="text-xl font-semibold mb-4">Add Task</h2>
    <form
     onSubmit={handleAddTask}
     >
      <input
      name="title"
        type="text"
        placeholder="Title"
        className="w-full p-2 border rounded-lg mb-4"
        maxLength={50}
        required
      />
      <textarea
      name="description"
        placeholder="Description"
        className="w-full p-2 border rounded-lg mb-4"
        maxLength={200}
      />
   
      <button className="btn bg-blue-500 text-white p-2 rounded-lg w-full">
        Add Task
      </button>
    </form>
  </div>
</div>   
        </div>
    );
};

export default AddTask;