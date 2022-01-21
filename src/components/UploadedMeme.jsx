import {Card, Col, Empty, Row, Typography } from "antd";

export function UploadedMeme ({history, ...props}) {
    return (
        <>
        <Typography.Title level={3}>Upload Memes</Typography.Title>
        <Row gutter={16} style={{ padding: '10px', }} justify="center">
            { history.length ? 
                history?.map((item, idx) => (
                    <Col span={4} xs={12} md={6} lg={4} key={idx}>
                        <Card className="grid-style" style={{ width: '100%' }}
                            actions={[]}
                            cover={
                                <img
                                    alt="logo"
                                    src={`https://${process.env.REACT_APP_IPFS_APP_URL}/ipfs/${item.hash}`}
                                />
                            }
                        >
                            Hash: <Typography.Text>
                                <a target="_blank" href={`https://${process.env.REACT_APP_IPFS_APP_URL}/ipfs/${item.hash}`} rel="noreferrer" >{item.hash}</a>
                                </Typography.Text>
                        </Card>
                    </Col>
                )) : <Empty />
            }
        </Row>
</>
    )
}