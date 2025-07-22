import appWriteService from "../appWrite/config.js"
import { Container, PostCard } from "../components"
import React, { useState, useEffect } from "react";

function AllPost() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        appWriteService.getPosts([]).then((posts) => {
            setPosts(posts.documents);
        });
    }, []);

    return ( 
        <div className="py-8 w-full">
            <Container>
                <div className="flex flex-wrap">
                    {
                        posts.map((post) => (
                            <div className="p-2 w-1/4">
                                <PostCard key={post.$id} post={post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
     );
}

export default AllPost;