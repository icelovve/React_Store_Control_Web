import BackendLayout from "../../../components/layout/BackendLayout"
import Breadcrumb from "./Breadcrumb"
import ProfileCard from "./ProfileCard"
import ProfileTabs from "./ProfileTabs"

const Admin = () => {
    return (
        <BackendLayout title="Profile">
            <>
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
            </>
        </BackendLayout>
    )
}

export default Admin
