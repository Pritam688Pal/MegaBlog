import React, { useState } from 'react';
import appWriteService from '../appWrite/config.js';
import { Link } from 'react-router-dom';


function Postcard(post)  {
    const [file, setFile] = useState(null);
  // console.log(post.post);
    appWriteService.getFilePreview(post.post.$id)
    .then((file) => setFile(file));
    
    return (
      <Link to={`/post/${post.post.$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4">
          <div className="w-full justify-center mb-4">
            <img
              src={file}
              alt={post.post.title}
              className="rounded-xl"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">{post.post.title}</h2>
        </div>
      </Link>
    );
}


export default Postcard;