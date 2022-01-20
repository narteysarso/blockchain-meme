import { Image, Button, Input, Space, Typography, List, Avatar } from "antd";
import { useMemo, useState } from "react";
import { useIPFS } from "../hooks/useIPFS";
import { useAccount, useRetrieve, useStore } from "../hooks/useWeb3";

export default function Meme() {
    const [file, setFile] = useState(null);
    const [hash, loading, addData] = useIPFS();
    const [account] = useAccount();
    const [history, historyLoading] = useRetrieve(account);
    const [result, resutLoading] = useStore(account, hash);


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

    const makeURLFromFile = useMemo(() => file && window.URL.createObjectURL(file), [file])

    return (
        <div className="d-flex j-around">
            <div className="d-flex f-column a-center">
                <div className="">
                    <Typography.Text>Current Account: {account} </Typography.Text>
                </div>
                <div className="d-flex">
                    <Image width={"35vw"} fallback="/images/logo.jpg" src={makeURLFromFile ?? ''} />
                </div>
                <div className="p-2">
                    <form onSubmit={handleSubmit}>
                        <Space>
                            <Input type="file" onChange={handleFileChange} />
                            <Button type="primary" htmlType="submit" loading={loading} >Submit</Button>
                        </Space>
                    </form>
                </div>
            </div>
            <div>
                <Typography.Title level={3}>Upload Memes</Typography.Title>
                <List
                    dataSource={history}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}>

                </List>
            </div>
        </div>
    )
}