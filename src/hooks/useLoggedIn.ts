import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import useRequest from "./useRequest";

export default function useLoggedIn(){
    const [data,error,loading,status] = useRequest({url:"http://localhost:3001/loggedIn"});
    const [loggedIn,setLoggedIn] = useState(false);

    useEffect(()=>{
        if(status === 200){
            setLoggedIn(true);
        }else{
            setLoggedIn(false);
        }
    },[]);
}