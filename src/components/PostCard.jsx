import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4 max-w-md mx-auto">
      <div className="flex items-center p-4">
        <img src={post.profilePic} alt={"prpfile pic"} className="w-10 h-10 rounded-full" />
        <div className="ml-2">
          <p className="font-semibold">{post.username}</p>
        </div>
      </div>
      <img src={post.postImage} alt="Post" className="w-full h-80 object-cover" />
      <div className="p-4">
        <p>{post.caption}</p>
        <div className="flex justify-between items-center mt-2">
          <button className="flex items-center space-x-2">
            <span>❤️</span>
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-2">
            <span>💬</span>
            <span>Comment</span>
          </button>
          <button className="flex items-center space-x-2">
              <span>📤</span>
              <span>Share</span>
          </button>


        </div>
      </div>
    </div>
  );
};

export default PostCard;
