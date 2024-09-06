/* eslint-disable jsx-a11y/anchor-is-valid */
import BackendLayout from "../../components/layout/BackendLayout"

const Home = () => {
    return (
        <BackendLayout title="Home">
            <>
                <div className="pagetitle">
                <h1 className="my-3">Home</h1>
                    <nav>
                        <ol className="breadcrumb">      
                            <a className="small text-decoration-none fw-light">Home</a>
                        </ol>
                    </nav>
                    <h1 className="text-center">Welcome back</h1>
                </div>
            </>
        </BackendLayout>
    )
}

export default Home
