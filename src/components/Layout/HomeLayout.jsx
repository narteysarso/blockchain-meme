import { Layout} from "antd";
import Footer from "../Footer";

export default function HomeLayout ({children}){
    return (
        <Layout className="mainLayout">
            <Layout.Content className="main">
                {children}
            </Layout.Content>
            <Layout.Footer>
                <Footer />
            </Layout.Footer>
        </Layout>
    )
}