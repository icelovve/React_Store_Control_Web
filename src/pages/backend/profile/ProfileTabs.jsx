import Overview from './Overview';
import EditProfile from './EditProfile';

const ProfileTabs = () => {
    return (
        <div className="card">
            <div className="card-body pt-3">
                <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">
                            Overview
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">
                            Edit Profile
                        </button>
                    </li>
                </ul>

                <div className="tab-content pt-2">
                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                        <Overview />
                    </div>

                    <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
                        <EditProfile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileTabs;
