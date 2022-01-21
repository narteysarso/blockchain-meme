import { Layout, Typography} from "antd";
import Footer from "../Footer";
import Logo from "../Logo";

export default function HomeLayout ({children}){
    return (
        <Layout className="mainLayout">
            <Layout.Header className="transparent-bg p-1 d-flex j-between">
                <div className="d-flex j-left a-center">
                    <Logo /> 
                    <Typography.Title level={3} className="pl-1"> BlockMeme </Typography.Title>
                </div>
                    
            </Layout.Header>
            <Layout.Content className="main p-1">
                {children}
            </Layout.Content>
            <Layout.Footer>
                <Footer />
            </Layout.Footer>
        </Layout>
    )
}