import { Image, Button, Input, Space, Typography} from "antd";
import { useContext, useMemo, } from "react";
import { DappContext } from "../context/dappContext";
import { UploadedMeme } from "./UploadedMeme";


export default function Meme() {
    
    const {file, setFile, addData, history, account, hashLoading} = useContext(DappContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addData(file);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setFile(file);
        }

    }

    const makeURLFromFile = useMemo(() => file && window.URL.createObjectURL(file), [file]);

    return (
        <div className="d-flex f-column p-2">
            <div className="d-flex f-column a-center">
                <div className="">
                    <Typography.Text>Current Account: {account} </Typography.Text>
                </div>
                <div className="d-flex">
                    <Image width={"35vw"} fallback="/images/logo.jpg" src={makeURLFromFile ?? `http://${process.env.REACT_APP_IPFS_APP_URL}/ipfs/${history?.slice(-1)[0]?.hash}`} />
                </div>
                <div className="p-2">
                    <form onSubmit={handleSubmit}>
                        <Space>
                            <Input type="file" onChange={handleFileChange} />
                            <Button type="primary" htmlType="submit" loading={hashLoading} >Submit</Button>
                        </Space>
                    </form>
                </div>
            </div>
            <div style={{ flexGrow: 1 }}>
                <UploadedMeme history={history} />
            </div>
        </div>
    )
}