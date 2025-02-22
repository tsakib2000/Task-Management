/* eslint-disable react/prop-types */




const UpdateModal = ({taskData}) => {

    const handleSubmit=e=>{
        e.preventDefault();
        const formData= new FormData(e.target);
    const updateData = Object.fromEntries(formData.entries());
    console.log(updateData);
    }
    return (
       
            <dialog id="my_modal_3" className="modal">

            </dialog>
    );
};

export default UpdateModal;