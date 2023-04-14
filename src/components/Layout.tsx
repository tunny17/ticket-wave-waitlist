import { FunctionComponent, ReactElement } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Inter from 'next/font';

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
                />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;