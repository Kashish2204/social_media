import React from "react";

const users = [
    {
        id: 1,
        name: "Andrew Bojangles",
        image: "/images/pexels-birkaybolushikayesi-116751423-29588819.jpg",
        createdDate: "2025-01-30",
        email: "andrew@example.com",
    },
    {
        id: 2,
        name: "Jane Doe",
        image: "/images/pexels-melody-ganjian-703138148-30373532.jpg",
        createdDate: "2025-01-29",
        email: "jane@example.com",
    },
    {
        id: 3,
        name: "John Smith",
        image: "/images/pexels-rajan-abdulla-2148461968-30110558.jpg",
        createdDate: "2025-02-04",
        email: "john@example.com",
    },
    {
        id: 4,
        name: "Jenni",
        image: "/images/pexels-sarah-486644806-30179760.jpg",
        createdDate: "2024-12-19",
        email: "jenni@example.com",
    },
    {
        id: 5,
        name: "Jack louis",
        image: "/images/pexels-sonic-230970541-12102576.jpg",
        createdDate: "2024-11-09",
        email: "jacklouis@example.com",
    },
];

const AdminPanel = () => {
  const handleDelete = (id) => {
    console.log("Delete user with ID:", id);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">User</th>
              <th className="p-2">ID </th>
              <th className="p-2">Email</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-2 flex items-center">
                  <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full mr-2" />
                  {user.name}
                </td>
                <td className="p-2">{user.createdDate}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;


