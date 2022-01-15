import { Typography } from "antd";

export default function Footer() {
    return (
        <div className="text-center">
            <Typography.Text >
               BlockMeme &copy; {(new Date()).getFullYear()} | Hire me: <a rel="noreferrer" href="https://linedin.com/in/narteykodjosarso" target="_blank">Nartey Kodjo-Sarso </a>
            </Typography.Text>
        </div>
    )
}