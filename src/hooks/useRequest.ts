import { useCallback, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

type requestProps = {
    url : string,
}

export default function  useRequest({url}:requestProps){
    const [data,setData] = useState(null);
    const [error,setError] = useState<Error>();
    const [loading,setLoading] = useState(false);
    const [status,setStatus] = useState(0);

    const fetchData = useCallback(async ()=>{
        try{
            setLoading(true);
            const response = await axios.get(url);
            setData(response.data);
            setStatus(response.status);
            console.log("response from server is ",response);   
        }catch(error){
            setError(error as Error);
        }finally{
            setLoading(false);
        }
    },[url]);
    
    useEffect(()=>{
        fetchData();
    },[fetchData]);

    return [data,error,loading,status];
}