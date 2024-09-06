import DocumentTitle from "react-document-title";
import SideBar from '../shared/SideBar';
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const BackendLayout = ({ children, title }) => {
    return (
        <>
            <DocumentTitle title={title + " | Smart Stock"} />
            <div className="d-flex flex-column min-vh-100">
                <header id="header" className="header fixed-top d-flex align-items-center">
                    <Navbar />
                </header>
                <div className="d-flex flex-grow-1">
                    <aside id="sidebar" className="sidebar">
                        <SideBar />
                    </aside>
                    <main  main id="main" className="main flex-grow-1" >
                        {children}
                    </main>
                </div>
                <footer id="footer" className="footer mt-auto py-3 bg-light text-center">
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default BackendLayout;
