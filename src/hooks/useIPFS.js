import { useState } from "react";
import { AddToIPFS } from "../services/ipfs";
import readFileAsArrayBuffer from "../utils/readFileAsArrayBuffer";

export function useIPFS(){
    const [hash, setHash] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const addData = async (file) => {
        try {
            
            if(!file){
                return;
            }
            setLoading(true);
            
            const callback = (error, results) => {
                
                if(error){
                    throw Error(error.message);
                }
    
                setHash(results['path']);
            }

            const result = await readFileAsArrayBuffer(file);

            
            AddToIPFS(result, callback)
    
            
        } catch (error) {
            console.log(error);
            setError(error.message);
        }finally{
            setLoading(false)
        }
        
    };

    return [hash, loading, addData,  error];
}