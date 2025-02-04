
// import React, { useState } from "react";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { toast } from "sonner";
// import { Link, useNavigate } from "react-router-dom";
// import { Loader2 } from "lucide-react";

// const LogIn = () => {
//   const [input, setInput] = useState({
//     username: "",

//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const navigate=useNavigate();

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };
//   const signupHandler = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     toast.success("LogIn successful");
//     console.log(input);
//     setLoading(false);
//     navigate("/");

//     setInput({
//       username: "",

//       password: "",
//     });
//   };
//   return (
//     <div className="flex items-center w-screen h-screen justify-center">
//       <form
//         onSubmit={signupHandler}
//         className="shadow-lg flex flex-col gap-5 p-12  "
//       >
//         <div className="my-4">
//           <h1 className="text-center font-bold text-xl my-2">LOGO</h1>
//           <p className="text-sm text-center">
//             Welcome to our website Sign Up for More Information
//           </p>
//         </div>

//         <div>
//           <Label className="text-base">username</Label>
//           <Input
//             type="text"
//             name="username"
//             value={input.username}
//             onChange={changeEventHandler}
//             className="focus-visible:ring-transparent my-2"
//           />
//         </div>

//         <div>
//           <Label className="text-base">Password</Label>
//           <Input
//             type="password"
//             name="password"
//             value={input.password}
//             onChange={changeEventHandler}
//             className="focus-visible:ring-transparent my-2"
//           />
//         </div>
//         {
//           loading?(<Button>
//             <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
//             Please wait
//         </Button>):(<Button
//           type="submit"
//           className="bg-blue-950 focus-visible:ring-transparent text-white hover:bg-blue-900"
//         >
//           LogIn
//         </Button>)
//         }

        
//         <span className="text-center text-xl">
//           {" "}
//           Dosen't have an account?{" "}
//           <Link to="/signup" className="text-blue-600 no-underline">
//             SignUp
//           </Link>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default LogIn;





import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import codeConnect from "../assets/codeConnect.png";
import axios from 'axios';
// import Home from "./Home";
import api from "./api";

const LogIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

  // const changeEventHandler = (e) => {
  //   const { name, value } = e.target;
    // setInput({ ...input, [name]: value });

  // };

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('/api/login', { userName, password });
      setMessage(response.data.message || 'Login successful!');
      navigate("/");
      toast.success("LogIn successful");
    // console.log(input);
    setLoading(false);
    

  } catch (error) {
      // Handle errors
      if (error.response) {
          setMessage('Error: ' + (error.response.data || 'Login failed'));
          setLoading(false);
      } else if (error.request) {
          setMessage('Error: No response from server. Please try again later.');
          setLoading(false);
      } else {
          setMessage('Error: ' + error.message);
          setLoading(false);
      }
  }

    
    // toast.success("LogIn successful");
    // console.log(input);
    // setLoading(false);
    // // navigate("/");

  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-900 text-white">
      {!isLoggedIn ? (
        <form
        onSubmit={loginHandler}
        className="bg-gray-800 shadow-md p-8 rounded-lg w-[450px] flex flex-col gap-4"
      >
        {/* CodeConnect Icon */}
        <div className="text-center">
          <img
            src={codeConnect}
            alt="codeConnect Logo"
            className="w-[150px] h-[150px] mx-auto rounded-full "
          />
        

        {/* Login Heading */}
        <h2 className="text-center font-semibold text-xl">Login to CodeConnect</h2>             
          </div>
        {/* Username Input */}
        <div>
          <Label className="text-sm">Username</Label>
          <Input
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div>
          <Label className="text-sm">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded focus:outline-none"
          />
          <Link
            to="/forgot-password"
            className="text-blue-500 text-sm block mt-1"
          >
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <div>
          {loading ? (
            <Button
              disabled
              className="w-full bg-blue-600 p-2 rounded text-white flex items-center justify-center"
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing in...
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-500 p-2 rounded text-white"
            >
              Login
            </Button>
          )}
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm mt-4">
          New to CodeConnect?{" "}
          <Link to="/signup" className="text-blue-500">
            Create an account.
          </Link>
        </p>
      </form>
      
    ): (
                <Home />
            )}

            {message && <p>{message}</p>
            }

    </div>
  );
};

export default LogIn;
