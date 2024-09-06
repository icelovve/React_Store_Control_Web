import { Link } from "react-router-dom"

const Breadcrumb = () => {
    return (
        <div className="pagetitle">
            <h1 className="my-3">Admin Account</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <Link
                        className="breadcrumb-item active small text-decoration-none fw-light"
                        to="/home"
                    >
                        Home
                    </Link>
                    <li className="breadcrumb-item small fw-light">Admin Account</li>
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb
