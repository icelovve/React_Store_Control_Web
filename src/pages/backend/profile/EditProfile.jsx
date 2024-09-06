/* eslint-disable jsx-a11y/anchor-is-valid */

const EditProfile = () => {
    return (
        <form>
            <div className="row mb-3">
                <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                <div className="col-md-8 col-lg-9">
                    <img src="/assets/img/img_ice.jpg" alt="Profile" />
                    <div className="pt-2">
                        <a href="#" className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload" /></a>
                        <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash" /></a>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                <div className="col-md-8 col-lg-9">
                    <input name="fullName" type="text" className="form-control" id="fullName" defaultValue="Kevin Anderson" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                <div className="col-md-8 col-lg-9">
                    <textarea name="about" className="form-control" id="about" style={{ height: 100 }} defaultValue={"Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor."} />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
                <div className="col-md-8 col-lg-9">
                    <input name="company" type="text" className="form-control" id="company" defaultValue="Lueilwitz, Wisoky and Leuschke" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
                <div className="col-md-8 col-lg-9">
                    <input name="job" type="text" className="form-control" id="Job" defaultValue="Admin" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                <div className="col-md-8 col-lg-9">
                    <input name="country" type="text" className="form-control" id="Country" defaultValue="USA" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                <div className="col-md-8 col-lg-9">
                    <input name="address" type="text" className="form-control" id="Address" defaultValue="A108 Adam Street, New York, NY 535022" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                <div className="col-md-8 col-lg-9">
                    <input name="phone" type="text" className="form-control" id="Phone" defaultValue="(436) 486-3538 x29071" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                <div className="col-md-8 col-lg-9">
                    <input name="email" type="email" className="form-control" id="Email" defaultValue="k.anderson@example.com" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Twitter" className="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
                <div className="col-md-8 col-lg-9">
                    <input name="twitter" type="text" className="form-control" id="Twitter" defaultValue="https://twitter.com/#" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Facebook" className="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                <div className="col-md-8 col-lg-9">
                    <input name="facebook" type="text" className="form-control" id="Facebook" defaultValue="https://facebook.com/#" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Instagram" className="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
                <div className="col-md-8 col-lg-9">
                    <input name="instagram" type="text" className="form-control" id="Instagram" defaultValue="https://instagram.com/#" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Linkedin" className="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
                <div className="col-md-8 col-lg-9">
                    <input name="linkedin" type="text" className="form-control" id="Linkedin" defaultValue="https://linkedin.com/#" />
                </div>
            </div>

            <div className="text-center">
                <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
        </form>
    )
}

export default EditProfile;
