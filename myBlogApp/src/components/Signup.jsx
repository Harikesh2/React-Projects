import React,{useState} from "react";
import authservice from "../appwrite/auth";
import { useNavigate,Link } from "react-router-dom";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import {Button, Input, Logo} from './index'
import { useForm } from "react-hook-form";
function Signup(){
    const navigate = useNavigate();
    const [error, setError]= useState();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();

    const create = async(data)=>{
        setError("")
        try {
           const userData = await authservice.createAccount(data) 
           if(userData){
            const userData = await authservice.getCurrentUser()
            if(userData)  dispatch(login(userData));
           }

            
        } catch (error) {
            setError(error.message)
            
        }
    }

    return
    (
        <div className=" flex items-center justify-center">
                <div className={` mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                        <div className="mb-2 flex justify-center">
                            <span className="inline-block w-full max-w-[100px]">
                                <Logo width="100%" />
                            </span>
                        </div>
                </div>
        </div>
    )

}
export default Signup;