import { Image, Button, Input, Space, Typography, Row, Col, Divider, Card } from "antd";
import { useContext, useMemo, } from "react";
import { DappContext } from "../context/dappContext";
import { UploadedMeme } from "./UploadedMeme";


export default function Meme() {

    const { file, setFile, addData, history, account, storeLoading } = useContext(DappContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!file) {
            return;
        }
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
        <Row >
            <Col span={24}  style={{backgroundColor: '#7ec1ff12'}}>
                <div className="wrapper">
                    <div className="square"></div>
                    <div className="squable"></div>
                </div>
                <Row className="p-2">
                    <Col xs={24} md={12} className="p-2" >
                        <Typography.Title>The <span className="color-blue">Crypto Meme</span></Typography.Title>
                        <Typography.Paragraph className="lora-text text-muted" style={{ fontSize: '18px', lineHeight: 1.8 }} >
                            This DApp enables you to save you meme on the blockchain <span style={{color: 'tomato'}}>(Ropsten Test Network)</span>.
                            If you're here, you're likely looking to find random words. Random Word Generator
                            is the perfect tool to help you do this. While this tool isn't a word creator,
                            it is a word generator that will generate random words for a variety of activities or uses
                        </Typography.Paragraph>

                    </Col>

                    <Col xs={24} md={12}>
                        <Card
                        style={{borderRadius: 10, textAlign: 'center'}}
                        type="inner"
                            title={<Typography.Text>Current Account: {account} </Typography.Text>}
                        >

                            <div className="d-flex j-center">
                                <Image width={"35vw"} fallback="/images/logo.jpg" src={makeURLFromFile ?? `http://${process.env.REACT_APP_IPFS_APP_URL}/ipfs/${history?.slice(-1)[0]?.hash}`} />
                            </div>
                            <div className="p-2">
                                <form onSubmit={handleSubmit}>
                                    <Space>
                                        <Input type="file" onChange={handleFileChange} />
                                        <Button type="primary" htmlType="submit" loading={storeLoading} >Submit</Button>
                                    </Space>
                                </form>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Divider />
            <Col span={24} className="p-2">

                <UploadedMeme history={history} />

            </Col>
        </Row>
    )
}