import React from 'react';
import PostCard from './PostCard.jsx';
import { useLocation } from 'react-router-dom';


const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};


const Feed = () => {
  
  const query = useQuery().get('search'); // Get the search query

  const posts = [
    {
      id: 1,
      username: 'user1',
      profilePic: "/images/pexels-willianjusten-15829527.jpg",
      postImage: "/images/pexels-melody-ganjian-703138148-30373532.jpg",
      caption: 'This is the first post',
    },
    {
      id: 2,
      username: 'user2',
      profilePic: "/images/pexels-willianjusten-15829527.jpg",
      postImage: "/images/pexels-birkaybolushikayesi-116751423-29588819.jpg",
      caption: 'This is the second post',
    },
    {
      id: 3,
      username: 'user3',
      profilePic: "/images/pexels-willianjusten-15829527.jpg",
      postImage: "/images/pexels-rajan-abdulla-2148461968-30110558.jpg",
      caption: 'This is the third post',
    },
    {
      id: 4,
      username: 'user4',
      profilePic: "/images/pexels-willianjusten-15829527.jpg",
      postImage: "/images/pexels-sarah-486644806-30179760.jpg",
      caption: 'This is the sixth post',
    },
    {
      id: 5,
      username: 'user5',
      profilePic: "/images/pexels-willianjusten-15829527.jpg",
      postImage: "/images/pexels-sonic-230970541-12102576.jpg",
      caption: 'This is the sixth post',
    },
    {
      id: 6,
      username: 'user6',
      profilePic: "/images/pexels-willianjusten-15829527.jpg",
      postImage: "/images/pexels-tnp-1464613945-29971507.jpg",
      caption: 'This is the sixth post',
    },
    // add more posts as needed...
  ];


  // const filteredPosts = posts.filter(post => post.caption.includes(query));


  const filteredPosts = query ? posts.filter(post => post.caption.includes(query)) : posts;



  return (
    // <div className="bg-gray-100 min-h-screen">
    //   <div className="container mx-auto py-4">
    //     <h1 className='text-2xl font-bold mb-4 text-center'> Feed </h1>
    //     {posts.map(post => (
    //       <PostCard key={post.id} post={post} />
    //     ))}
    //   </div>
    // </div>

    // <div className="bg-gray-100 min-h-screen flex flex-col items-center">
    //   <h1 className="text-2xl font-bold mb-4 text-center">Reels</h1>
    //   <div className="container mx-auto py-4">
    //       {posts.filter(post => post.caption.includes(query)).map(post => (
    //           <PostCard key={post.id} post={post} />
    //       ))}
    //   </div>
    // </div>


    // <div className="bg-gray-100 min-h-screen flex flex-col items-center">
    //   <h1 className="text-2xl font-bold mb-4 text-center">Reels</h1>
    //   <div className=" container mx-auto py-4">
    //     {filteredPosts.length > 0 ? (
    //       filteredPosts.map(post => (
    //         <PostCard key={post.id} post={post} />
    //       ))
    //     ) : (
    //       <p className="text-center text-gray-600 italic">your match is not found</p>
    //     )}
    //   </div>
    // </div>



    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">Reels</h1>
      <div className="container mx-auto py-4">
        {query && filteredPosts.length === 0 ? (
            <p className="text-center text-gray-600">your match is not found</p>
        ) : (
            filteredPosts.map(post => (
               <PostCard key={post.id} post={post} />
            ))
        )}
      </div>
    </div>




  );


};

export default Feed;
