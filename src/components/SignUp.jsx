
// import React, { useState } from "react";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { toast } from "sonner";
// import { Link, useNavigate } from "react-router-dom";
// import { Loader2 } from "lucide-react";
// import { useSelector } from "react-redux";

// const SignUp = () => {
//   const [input, setInput] = useState({
//     fullname: "",
//     username: "",
//     email: "",
//     password: "",
//     profession: "",
//     aboutYou: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const {user} = useSelector(store=>store.auth);
//   const navigate=useNavigate();

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };
//   const signupHandler = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     toast.success("sign Up successful");
//     console.log(input);
//     setLoading(false);
//     navigate("/")

//     setInput({
//       fullname: "",
//       username: "",
//       email: "",
//       password: "",
//       profession: "",
//       aboutYou: "",
//     });

//   };

// //   useEffect(()=>{
// //     if(user){
// //         navigate("/");
// //     }
// // },[])
//   return (
//     <div className="flex items-center w-screen h-screen justify-center">
//       <form
//         onSubmit={signupHandler}
//         className="shadow-lg flex flex-col gap-5 p-12 w-[36rem] "
//       >
//         <div className="my-4">
//           <h1 className="text-center font-bold text-xl my-2">LOGO</h1>
//           <p className="text-sm text-center">
//             Welcome to our website Sign Up for More Information
//           </p>
//         </div>
//         <div>
//           <Label className="text-base">Full Name</Label>
//           <Input
//             type="text"
//             name="fullname"
//             value={input.fullname}
//             onChange={changeEventHandler}
//             className="focus-visible:ring-transparent my-2"
//           />
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
//           <Label className="text-base">Email</Label>
//           <Input
//             type="email"
//             name="email"
//             value={input.email}
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
//         <div>
//           <Label className="text-base">profession</Label>
//           <Input
//             type="text"
//             name="profession"
//             value={input.profession}
//             onChange={changeEventHandler}
//             className="focus-visible:ring-transparent my-2"
//           />
//         </div>
//         <div>
//           <Label className="text-base">About you</Label>
//           <Input
//             type="text"
//             name="aboutYou"
//             value={input.aboutYou}
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
//           SignUp
//         </Button>)
//         }

//         <span className="text-center text-xl">
//           {" "}
//           already have an account?{" "}
//           <Link to="/login" className="text-blue-600 no-underline">
//             LogIn
//           </Link>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";
import codeConnect from "../assets/codeConnect.png";
import axios from "axios";

const SignUp = () => {
  const [input, setInput] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    profession: "",
    about: "",
  });
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [uploadedFileUrl, setUploadedFileUrl] = useState(null);

  // const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const changeFileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please upload a profile picture.");
      return;
    }

    // setLoading(true);
    // toast.success("Sign Up successful");
    // console.log(input);
    // setLoading(false);
    // navigate("/");

    const data = new FormData();
    data.append("fullName", input.fullName);
    data.append("userName", input.userName);
    data.append("email", input.email);
    data.append("password", input.password);
    data.append("profession", input.profession);
    data.append("about", input.about);
    data.append("avatar", file);
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/signup",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.message || "Registration successful!");

      toast.success("Sign Up successful");
      console.log(input);
      setLoading(false);
      navigate("/");
      setUploadedFileUrl(response.data.avatar || null); // If you want to display the avatar URL
    } catch (error) {
      // Handle errors
      if (error.response) {
        setMessage("Error: " + (error.response.data || "File upload failed"));
        setLoading(false);
      } else if (error.request) {
        setMessage("Error: No response from server. Please try again later.");
        setLoading(false);
      } else {
        setMessage("Error: " + error.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-row justify-around items-center min-w-screen  bg-gray-900 ">
      <div className="flex items-center w-[910px] min-h-screen ">
        <div className="flex justify-around items-center min-w-screen h-[730px] bg-gray-800 w-1/2 ">
          <div className="text-center w-[379px] bg-gray-800 ">
            <h1 className="text-4xl md:text-6xl font-bold text-white overflow-hidden whitespace-nowrap border-r-4 border-blue-500 animate-typewriter">
              {/* <span className="animate-pulse text-blue-500">CodeConnect</span> */}
              CodeConnect
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-300">
              <span className="animate-fade-in">Where ideas spark,</span>
              <br />
              <span className="animate-slide">code flows, and connections</span>
              <br />
              <span className="animate-scale text-green-400">
                are limitless!
              </span>
            </p>
            <p className="mt-6 text-lg text-yellow-300 animate-bounce">
              Join the community.
            </p>
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex items-center justify-center min-w-screen min-h-screen bg-gray-900 text-white">
            <form
              onSubmit={signupHandler}
              className="bg-gray-800 shadow-md p-8 rounded-lg w-[450px] flex flex-col gap-2"
            >
              {/* Logo */}
              <div className="text-center">
                {/* <img
                  src={codeConnect}
                  alt="CodeConnect Logo"
                  className="w-[150px] h-[150px] mx-auto rounded-full  "
                /> */}

                {/* Heading */}
                <h2 className="text-center font-semibold text-xl">
                  Sign up for CodeConnect
                </h2>
              </div>
              {/* Full Name Input */}
              <div>
                <Label className="text-sm">Full name</Label>
                <Input
                  type="text"
                  name="fullName"
                  value={input.fullName}
                  onChange={changeEventHandler}
                  required
                  className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                />
              </div>

              {/* Username Input */}
              <div>
                <Label className="text-sm">Username</Label>
                <Input
                  type="text"
                  name="userName"
                  value={input.userName}
                  onChange={changeEventHandler}
                  required
                  className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                />
              </div>

              {/* Email Input */}
              <div>
                <Label className="text-sm">Email address</Label>
                <Input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
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
                  value={input.password}
                  onChange={changeEventHandler}
                  required
                  className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                />
              </div>

              {/* Profession Input */}
              <div>
                <Label className="text-sm">Profession</Label>
                <Input
                  type="text"
                  name="profession"
                  value={input.profession}
                  onChange={changeEventHandler}
                  required
                  className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                />
              </div>

              {/* About You Input */}
              <div>
                <Label className="text-sm">About you</Label>
                <Input
                  type="text"
                  name="about"
                  value={input.about}
                  onChange={changeEventHandler}
                  required
                  className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded focus:outline-none"
                />
              </div>
              <div>
                <Label className="text-base">Avatar</Label>
                <Input
                  type="file"
                  onChange={changeFileHandler}
                  className="focus-visible:ring-transparent my-2"
                />
              </div>

              {/* Sign Up Button */}
              <div>
                {loading ? (
                  <Button
                    disabled
                    className="w-full bg-blue-600 p-2 rounded text-white flex items-center justify-center"
                  >
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing up...
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-500 p-2 rounded text-white"
                  >
                    Sign up
                  </Button>
                )}
              </div>

              {/* Login Link */}
              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Log in
                </Link>
              </p>
            </form>
            {message && <p>{message}</p>}
            {uploadedFileUrl && (
              <p>
                Uploaded Avatar:{" "}
                <a
                  href={uploadedFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Avatar
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
