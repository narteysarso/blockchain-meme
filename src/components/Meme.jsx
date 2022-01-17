import { Image, Button, Input, Space } from "antd";
import {  useMemo, useState } from "react";
import { useIPFS } from "../hooks/useIPFS";

export default function Meme() {
    const [file, setFile] = useState(null);
    const [hash,loading, addData] = useIPFS();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        addData(file);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if(file){
            setFile(file);
        }
        
    }

    const makeURLFromFile = useMemo(()  => file && window.URL.createObjectURL(file), [file])

    return (
        <div className="d-flex f-column a-center">
            <div className="d-flex">
                <Image width={"35vw"} fallback="/images/logo.jpg" src={ makeURLFromFile ?? ''} />
            </div>
            <div className="p-2">
                <form onSubmit={handleSubmit}>
                    <Space>
                        <Input type="file" onChange={handleFileChange}/>
                        <Button type="primary" htmlType="submit" loading={loading} >Submit</Button>
                    </Space>
                </form>
            </div>
        </div>
    )
}