import React from "react";
import LeftSidebar from "./components/LeftSidebar.jsx";
import { Toaster, toast } from "sonner";
import ProfilePage from "./components/ProfilePage.jsx";
import { browser } from "globals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import MessagePage from "./components/MessagePage.jsx";
import SettingPage from "./components/SettingPage.jsx";
import Feed from "./components/Feed.jsx";
import  SearchPage from "./components/SearchPage.jsx";


import AdminDashboard from "./components/AdminDashboard.jsx";
import NewMsg from "./components/NewMsg.jsx";




function App() {

  return (
    // <div className="flex">
    //   <LeftSidebar/>
    //   <div className="ml-64 w-full">
    //     {/* <ProfilePage/> */}
    //     {/* <MessagePage/> */}
    //     {/* <SettingPage/> */}
    //     { <Feed/> }


    //     {/* { <Search/> } */}
    //     { <SearchPage/>}

        

    //   </div>
    // </div>

    // <Router>
    //   <div className="flex">
    //     <LeftSidebar />
    //     <div className="flex-grow">
    //       <Routes>
    //         <Route path="/" element={<ProfilePage />} />
    //         <Route path="/profile" element={<ProfilePage />} />
    //         <Route path="/message" element={<MessagePage />} />
    //         <Route path="/setting" element={<SettingPage />} />
    //         <Route path="/feed" element={<Feed />} />
    //         <Route path="/search" element={<SearchPage />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>

    <Router>
      <div className="flex">
        <LeftSidebar />
        <div className="ml-64 w-full">
          <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/message" element={<MessagePage />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/search" element={<SearchPage />} />




            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="newmsg" element= {<NewMsg/>} />




          </Routes>
        </div>
      </div>
    </Router>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<LeftSidebar/>}></Route>
    //     <Route path="/profile" element={<ProfilePage/>}></Route>
    //     <Route path="/message" element={<MessagePage/>}></Route>
    //     <Route path="/setting" element={<SettingPage/>}></Route>
    //     <Route path="/feed" element={<Feed/>}></Route>
    //     <Route path="/search" element={<SearchPage/>}></Route>

    //   </Routes>
    // </Router>
  );
  
  
};

export default App;





