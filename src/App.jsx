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




function App() {

  return (
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



            <Route path="/admin" element= {<AdminPanel/>}/>




          </Routes>
        </div>
      </div>
    </Router>
  );
  
  
};

export default App;

