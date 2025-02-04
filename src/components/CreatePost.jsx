import React, { useRef, useState } from 'react'
import { Dialog, DialogContent, DialogHeader } from './ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Textarea } from './ui/textarea';
import { readFileAsDataURL } from '@/lib/utils';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { DialogTrigger } from '@radix-ui/react-dialog';

const CreatePost = ({open , setOpen,isDark,SetIsDark}) => {
 const imageRef=useRef();
 const [file,setFile]=useState("");
 const [caption,setCaption]=useState("");
 const [imagePreview, setImagePreview] = useState("");
 const [loading, setLoading] = useState(false);
 const [videoPreview, setVideoPreview] = useState("");

 const fileChangeHandeler=async(e)=>{
  const file = e.target.files?.[0];
  if (file){
    setFile(file); 
    const dataUrl = await readFileAsDataURL(file);
      setImagePreview(dataUrl);
  }
 }

 const videoChangeHandeler=async(e)=>{
  const file = e.target.files?.[0];
  if (file){
    setFile(file); 
    const dataUrl = await readFileAsDataURL(file);
      setVideoPreview(dataUrl);
  }
 }

   const createPostHandler=async(e)=>{
           e.preventDefault();
           console.log(file,caption)
           try {
            
           } catch (error) {
            
           }
   }

  return (
   <div>
     <Dialog open={open} >
      <DialogContent onInteractOutside={() => setOpen(false)} className={isDark?"bg-slate-800 text-slate-100":"bg-gray-100"}>
        <DialogHeader className='text-center font-semibold text-xl'>Create New Post</DialogHeader>
        <div className='flex gap-3 items-center'>
          <Avatar>
            <AvatarImage src="" alt="image"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className='font-semibold text-s'>Username</h1>
            <span className='text-gray-600 text-s'>Bio here...</span>
          </div>
        </div>
        <Textarea value={caption} onChange={(e)=> setCaption(e.target.value)} className="focus-visible:ring-transparent border-none" placeholder="Write a caption..."/>
        {
          imagePreview && (
            <div className='w-full h-64 flex items-center justify-center'>
              <img src={imagePreview} alt="preview_img" className='object-cover h-full w-full rounded-md' />
            </div>
          )
        }
        <input  ref={imageRef} type='file'  className='hidden' onChange={fileChangeHandeler} />
        <button onClick={() => imageRef.current.click()} className='w-fit mx-auto bg-[#0095F6] hover:bg-[#258bcf]  focus-visible:ring-transparent text-white p-3 rounded-xl ' >select from computer</button>

        {
          imagePreview && (
            loading ? (
              <Button>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Please wait
              </Button>
            ) : (
              <Button onClick={createPostHandler} type="submit" className={isDark?"bg-blue-700 focus-visible:ring-transparent text-white hover:bg-blue-900 rounded-xl " :"bg-blue-950 focus-visible:ring-transparent text-white hover:bg-blue-900 rounded-xl "}>Post</Button>
            )
          )
        }
        
        <Dialog>
          <DialogTrigger>
           <div>
            <Button className={isDark?"bg-blue-700 focus-visible:ring-transparent text-white hover:bg-blue-900 rounded-xl " :"bg-blue-950 focus-visible:ring-transparent text-white hover:bg-blue-900 rounded-xl "}>
              Upload Video
            </Button>
           </div>
          </DialogTrigger>
          <DialogContent className={isDark?"bg-slate-800 text-slate-100":"bg-gray-100"}>
           <input type='file' accept='video/*' className="w-full p-2 mt-1 border border-gray-600 rounded focus:outline-none">
           

           </input>
           <Button className={isDark?"bg-blue-700 focus-visible:ring-transparent text-white hover:bg-blue-900 rounded-xl " :"bg-blue-950 focus-visible:ring-transparent text-white hover:bg-blue-900 rounded-xl "}> Post </Button>
          </DialogContent>
        </Dialog>
        

      </DialogContent >
    </Dialog>
   </div>
  )
}

export default CreatePost;
