import React, { useEffect, useState } from "react";
import appWriteService from "../appWrite/config";
import { Container, PostCard } from "../components";

function HomePage() {
    const [posts, setPosts] = useState([]);
    // console.log(posts);
    useEffect(() => {
        appWriteService.getPosts([])
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                No posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    } else {
        return (
            <div className="w-full py-8 mt-4">
                <Container>
                    <div className="flex flex-wrap">
                        {posts.map((post) => (
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        )
    }
}

export default HomePage;