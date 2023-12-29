import React from "react";
import { UseForm, useForm } from "react-hook-form";
import { useCallback } from "react";
import {Button,Input,Select, RTE} from '../index'
import appwriteService from '../../appwrite/config';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({post}){
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues:{
            title: post?.title ||'',
            slug:  post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
    
        },
    })

    const navigate = useNavigate();
    const userData = useSelector(state => state.user.userData)

    const submit = async (data)=>{
        if(post){
            data.image[0] ? appwriteService.uploadFile(data.image[0]) : null

            if(file){
                appwriteService.deleteFile(post.featuredImage)
            }
            const dbPost = await appwriteService.updatePost(post.$id,{
                ...data,
                featuredImage: file ? file.$id : undefined,
            })
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)  
            }
        } else{
            const file = await appwriteService.uploadFile(data.image[0]);

            if(file){
               const fileId = file.$id 
               data.featuredImage = fileId 
               const dbpost = await appwriteService.createPost({
                ...data,
                userId: userData.$id,
               })
               if(dbpost){
                navigate(`/post/${dbpost.$id}`)
               }
            }
        }

    }

    return(
        <div></div>
    )
    

}

export default PostForm;