const EmployeeForm = ({
    isEditMode,
    newEmployee,
    setNewEmployee,
    imagePreview,
    handleImageChange,
    handleSaveEmployee,
}) => {
    return (
        <div className="modal fade" id="employeeModal" tabIndex="-1" aria-labelledby="employeeModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="employeeModalLabel">
                            {isEditMode ? "Edit Employee" : "Add Employee"}
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="img" className="form-label">
                                    Upload Image
                                </label>
                                <input type="file" className="form-control" id="img" onChange={handleImageChange} />
                                {imagePreview && <img src={imagePreview} alt="Preview" className="img-thumbnail mt-2" width="100" />}
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={newEmployee.name}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="position" className="form-label">
                                        Position
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="position"
                                        value={newEmployee.position}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone" className="form-label">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        value={newEmployee.phone}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={newEmployee.email}
                                        onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={handleSaveEmployee}
                            data-bs-dismiss="modal"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeForm;
