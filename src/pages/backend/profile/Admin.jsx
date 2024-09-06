import BackendLayout from "../../../components/layout/BackendLayout"
import Breadcrumb from "./Breadcrumb"
import ProfileCard from "./ProfileCard"
import ProfileTabs from "./ProfileTabs"

const Admin = () => {
    return (
        <BackendLayout title="Admin Account">
            <main id="main" className="main">
                <Breadcrumb />
                <section className="section profile">
                    <div className="row">
                        <div className="col-xl-4">
                            <ProfileCard />
                        </div>
                        <div className="col-xl-8">
                            <ProfileTabs />
                        </div>
                    </div>
                </section>
            </main>
        </BackendLayout>
    )
}

export default Admin
