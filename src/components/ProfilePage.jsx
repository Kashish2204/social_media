import React, { useState } from "react";

const ProfilePage = () => {
    const [user, setUser] = useState({
        username: " Jack Doe ",
        bio: "Lover of photography, travel, and coffee.",
        profilePicUrl: "/images/pexels-tnp-1464613945-29971507.jpg",
        followers: 120,
        following: 200,
        posts: 5,
    });

    const [posts, setPosts] = useState([
        { id: 1, imageUrl: "/images/pexels-willianjusten-15829527.jpg" },
        { id: 2, imageUrl: "/images/pexels-melody-ganjian-703138148-30373532.jpg" },
        { id: 3, imageUrl: "/images/pexels-rajan-abdulla-2148461968-30110558.jpg" },
        { id: 4, imageUrl: "/images/pexels-sarah-486644806-30179760.jpg" },
        { id: 5, imageUrl: "/images/pexels-sonic-230970541-12102576.jpg" },
    ]);

    const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [formData, setFormData] = useState({ username: user.username, bio: user.bio });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser((prev) => ({ ...prev, profilePicUrl: reader.result })); 
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        setUser((prev) => ({ ...prev, ...formData }));
        setIsEditModalOpen(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-4 relative">
            {/* Profile Header */}
            <div className="flex flex-col items-center text-center space-y-4">
                <img
                    src={user.profilePicUrl}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover cursor-pointer"
                    onClick={() => setIsProfilePopupOpen(true)}
                />
                <h1 className="text-2xl font-bold">{user.username}</h1>
                <p className="text-gray-500">{user.bio}</p>
                <div className="flex space-x-8">
                    <div className="text-center">
                        <span className="block text-xl font-bold">{user.posts}</span>
                        <span className="text-gray-600">Posts</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-xl font-bold">{user.followers}</span>
                        <span className="text-gray-600">Followers</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-xl font-bold">{user.following}</span>
                        <span className="text-gray-600">Following</span>
                    </div>
                </div>

                <div className="flex space-x-4 mt-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        onClick={() => setIsEditModalOpen(true)}
                    >
                        Edit Profile
                    </button>

                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        onClick={() => alert(" View Archieve!... ")}
                    >
                        View Archieve
                    </button>
                </div>
            </div>

            {/* Posts Grid */}
            <div className="mt-8 grid grid-cols-3 gap-4">
                {posts.map((post) => (
                    <div key={post.id} className="relative">
                        <img
                            src={post.imageUrl}
                            alt="Post"
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>

            {/* Profile Picture Popup */}
            {isProfilePopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-10 "
                    onClick={() => setIsProfilePopupOpen(false)}>
                    <div className="relative">
                        <img
                            src={user.profilePicUrl}
                            alt="Profile Zoom"
                            className="w-80 h-80 rounded-full object-cover"
                        />
                    </div>
                </div>
            )}

            {/* Edit Profile Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Bio</label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-gray-700">Profile Picture</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload} 
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end space-x-4">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded-lg"
                                onClick={() => setIsEditModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
