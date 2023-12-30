import React, {useState, useEffect} from "react";
import { Container } from "../components";
import service from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
import {PostForm} from '../components/Post-form/PostForm';

function EditPost(){
    const [post, SetPosts]= useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if (slug) {
            service.getPost(slug).then((post)=>{
                if(post){
                    SetPosts(post)
                }
            })  
        }else{
            navigate('/')
        }
    },[slug, navigate])
    return post ? (<div className=" py-8">
        <Container>
           <PostForm post={post} />
        </Container>
    </div>) : null

}

export default EditPost;