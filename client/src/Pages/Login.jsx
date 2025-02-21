import { useContext } from 'react';
import logo from '../assets/icons8-to-do-list-100.png'
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {googleSignIn,setUser}=useContext(AuthContext);
  const navigate=useNavigate();
  const handleGoogleLogIn=()=>{

    googleSignIn()
    .then(data=>{
      setUser(data.user);
      navigate('/')
    })
   
 
  }
    return (
<div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        {/* Logo & Title */}
        <h1 className="text-3xl font-bold text-red-600 mb-4">Todoist</h1>
        <p className="text-gray-600 mb-6">Manage your tasks efficiently</p>

        {/* Google Login Button */}
        <button onClick={handleGoogleLogIn} className="flex items-center justify-center w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-200 transition">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
          >
            <path
              fill="#4285F4"
              d="M24 9.5c3.53 0 6.43 1.16 8.8 3.35l6.55-6.55C34.79 2.3 29.69 0 24 0 14.68 0 6.65 5.37 2.67 13.2l7.84 6.09C12.49 12.37 17.78 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.08 24.52c0-1.4-.12-2.74-.35-4.03H24v7.64h12.55c-.63 3.36-2.53 6.19-5.36 8.07l7.84 6.08c4.58-4.23 7.26-10.46 7.26-17.76z"
            />
            <path
              fill="#FBBC05"
              d="M10.51 28.11c-1.17-3.36-1.17-6.98 0-10.34L2.67 11.68C-1.1 19.37-1.1 28.64 2.67 36.33l7.84-6.08z"
            />
            <path
              fill="#EA4335"
              d="M24 48c6.33 0 11.64-2.11 15.55-5.71l-7.84-6.08c-2.2 1.47-4.99 2.3-7.71 2.3-6.22 0-11.51-3.87-13.49-9.37l-7.84 6.08C6.65 42.63 14.68 48 24 48z"
            />
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
    );
};

export default Login;