import DocumentTitle from "react-document-title";
import SideBar from '../shared/SideBar';
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const BackendLayout = ({ children, title }) => {
    return (
        <>
            <DocumentTitle title={title + " | Smart Stock"} />
            <div className="d-flex flex-column min-vh-100">
                <header>
                    <Navbar />
                </header>
                <div className="d-flex flex-grow-1">
                    <aside>
                        <SideBar />
                    </aside>
                    <main className="flex-grow-1">
                        {children}
                    </main>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default BackendLayout;
