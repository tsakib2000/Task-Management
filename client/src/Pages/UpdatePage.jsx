/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../Hook/useAxiosPublic";
import Swal from "sweetalert2";
const UpdatePage = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState(null);
  useEffect(() => {
    fetchSingleTask(id);
  }, [id]);
  const fetchSingleTask = async (id) => {
    try {
      const response = await axiosPublic(`/singleTask/${id}`);
      setTaskData(response.data);
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updateData = Object.fromEntries(formData.entries());
    try {
      await axiosPublic.patch(`/task/${id}`, updateData);
      navigate(-1);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your task updated successfully",
        showConfirmButton: false,
        timer: 1500
      });
    } catch(err) {
      
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.message}`,
      });
     
    }
    
  };
  return (
    <div className="bg-[#dddddd]min-h-screen">
      <form
        onSubmit={handleUpdate}
        className="max-w-[700px] mx-auto bg-[#FFFFFF] px-4 py-4 border-none 8px space-y-3 grid grid-cols-2"
      >
        <div className="col-span-full">
          <label className="font-medium text-black pb-1.5 block">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={taskData?.title}
            className="bg-transparent px-3 py-2 border-[1px] rounded-[10px] w-full p-2 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="col-span-full">
          <label className="font-medium text-black pb-1.5 block">
            Description
          </label>
          <textarea
            name="description"
            rows={3}
            defaultValue={taskData?.description}
            className="bg-transparent px-3 py-2 border-[1px] rounded-[10px] w-full p-2 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="col-span-full">
          <label className="font-medium text-black pb-1.5 block">Status</label>
          <select
            name="status"
            className="bg-transparent px-3 py-2 border-[1px] rounded-[10px] w-full p-2 focus:outline-none focus:border-blue-400 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue={taskData?.status}
          >
            <option value="todo">Todo</option>
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="col-span-full">
          <div className="justify-center">
            <button
              type="submit"
              className="cursor-pointer btn bg-[#00ADB5] text-[#ffffff] text-[16px] rounded-[6px] px-[16px] py-[12px] w-[150px] text-center"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
