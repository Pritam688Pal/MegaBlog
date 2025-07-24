import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appWriteService from "../appWrite/config.js";
import {useParams,useNavigate} from "react-router-dom";

function EditPost() {
    const [post, setPost] = useState(null);
    const slug = useParams();
    const Navigate = useNavigate();
    
    useEffect(() => {
        if (slug){
            // console.log(slug.slug);
            appWriteService.getPosts(slug.slug)
           .then((p) => {
                // console.log(p);
                if(p) setPost(p);
           })
        } else {
            Navigate('./');
        }
    }, [slug, Navigate]);

    return post? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : (
        <div className="py-8">
            <Container>
                <h1>Loading...</h1>
            </Container>
        </div>
    );
}

export default EditPost;