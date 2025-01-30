import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <button className="p-4 bg-blue-500 text-white" onClick={() => navigate("/admin/users")}>
          Manage Users
        </button>
        <button className="p-4 bg-green-500 text-white" onClick={() => navigate("/admin/posts")}>
          Manage Posts
        </button>
        <button className="p-4 bg-red-500 text-white" onClick={() => navigate("/admin/reports")}>
          Review Reports
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
