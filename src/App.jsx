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
import AdminPanel from "./components/AdminPanel.jsx";
import MyCollection from "./components/MyCollection.jsx";
import CreatePost from "./components/CreatePost.jsx";
import NotificationPage from "./components/NotificationPage.jsx";
import LogIn from "./components/LogIn.jsx";
import SignUp from "./components/Signup.jsx";

function App() {

  return (
      <Router>
      <div className="flex">
        <LeftSidebar />
        <div className="ml-64 w-full">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/message" element={<MessagePage />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/admin" element= {<AdminPanel/>}/>
            <Route path="/create" element= {<CreatePost/>}/>
            <Route path="/collection" element= {<MyCollection/>}/>
            <Route path="/notification" element= {<NotificationPage/>}/>
            <Route path="/login" element= {<LogIn/>}/>
            <Route path="/signup" element= {<SignUp/>}/>



          </Routes>
        </div>
      </div>
    </Router>
  );
  
  
};

export default App;

