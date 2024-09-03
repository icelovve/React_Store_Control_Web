import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackendLayout from "../../components/layout/BackendLayout";
import Swal from "sweetalert2";

const initialEmployees = {
    1: {
        id: "1",
        name: "Luna Doe",
        position: "Sales Associate",
        img: "/assets/img/messages-1.jpg",
        phone: "0911431216",
        email: "luna@example.com",
    },
    2: {
        id: "2",
        name: "Jane Smith",
        position: "Cashier",
        img: "/assets/img/messages-2.jpg",
        phone: "0880981234",
        email: "janesmith@example.com",
    },
    3: {
        id: "3",
        name: "Michael Johnson",
        position: "Store Manager",
        img: "/assets/img/messages-3.jpg",
        phone: "0954358213",
        email: "michael@example.com",
    },
};

const Employees = () => {
    const [employees, setEmployees] = useState(initialEmployees);
    const [newEmployee, setNewEmployee] = useState({
        name: "",
        position: "",
        img: "",
        phone: "",
        email: "",
    });
    const [imagePreview, setImagePreview] = useState("");
    const [isEditMode, setIsEditMode] = useState(false); // แสดงว่ากำลังแก้ไขหรือไม่
    const [editEmployeeId, setEditEmployeeId] = useState(null); // เก็บ ID ของพนักงานที่จะแก้ไข

    const handleDelete = (id) => {
        if (id != null) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    const updatedEmployees = { ...employees };
                    delete updatedEmployees[id];
                    setEmployees(updatedEmployees);

                    Swal.fire({
                        title: "Deleted!",
                        text: "The employee has been deleted.",
                        icon: "success",
                    });
                }
            });
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
            setNewEmployee({ ...newEmployee, img: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleAddEmployee = () => {
        const id = new Date().getTime().toString(); // Generate a simple unique ID
        const employee = {
            id,
            ...newEmployee,
        };
        setEmployees({ ...employees, [id]: employee });
        resetForm();
        Swal.fire({
            title: "Added!",
            text: "The employee has been added.",
            icon: "success",
        });
    };

    const handleEditEmployee = () => {
        const updatedEmployees = {
            ...employees,
            [editEmployeeId]: {
                ...newEmployee,
                id: editEmployeeId,
            },
        };
        setEmployees(updatedEmployees);
        resetForm();
        Swal.fire({
            title: "Updated!",
            text: "The employee has been updated.",
            icon: "success",
        });
    };

    const resetForm = () => {
        setNewEmployee({
            name: "",
            position: "",
            img: "",
            phone: "",
            email: "",
        });
        setImagePreview("");
        setIsEditMode(false);
        setEditEmployeeId(null);
    };

    const handleEditClick = (id) => {
        const employeeToEdit = employees[id];
        setNewEmployee(employeeToEdit);
        setImagePreview(employeeToEdit.img);
        setIsEditMode(true);
        setEditEmployeeId(id);
    };

    return (
        <BackendLayout title="Employee Management">
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1 className="my-3">Employee Management</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <Link
                                className="breadcrumb-item active small text-decoration-none fw-light"
                                to="/home"
                            >
                                Home
                            </Link>
                            <li className="breadcrumb-item small fw-light">
                                Employee Management
                            </li>
                        </ol>
                    </nav>
                    <div className="d-flex justify-content-end mb-3">
                        <button
                            type="button"
                            className="btn btn-success"
                            data-bs-toggle="modal"
                            data-bs-target="#addEmployeeModal"
                            onClick={() => resetForm()}
                        >
                            <i className="bi bi-plus"></i> Add Employee
                        </button>
                    </div>
                </div>

                {/* Modal for add or edit employee */}
                <div
                    className="modal fade"
                    id="addEmployeeModal"
                    tabIndex="-1"
                    aria-labelledby="addEmployeeModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addEmployeeModalLabel">
                                    {isEditMode ? "Edit Employee" : "Add Employee"}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="img" className="form-label">
                                            Upload Image
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="img"
                                            onChange={handleImageChange}
                                        />
                                        {imagePreview && (
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="img-thumbnail mt-2"
                                                width="100"
                                            />
                                        )}
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
                                                onChange={(e) =>
                                                    setNewEmployee({
                                                        ...newEmployee,
                                                        name: e.target.value,
                                                    })
                                                }
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
                                                onChange={(e) =>
                                                    setNewEmployee({
                                                        ...newEmployee,
                                                        position: e.target.value,
                                                    })
                                                }
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
                                                onChange={(e) =>
                                                    setNewEmployee({
                                                        ...newEmployee,
                                                        phone: e.target.value,
                                                    })
                                                }
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
                                                onChange={(e) =>
                                                    setNewEmployee({
                                                        ...newEmployee,
                                                        email: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                {isEditMode ? (
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={handleEditEmployee}
                                        data-bs-dismiss="modal"
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={handleAddEmployee}
                                        data-bs-dismiss="modal"
                                    >
                                        Save
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <section className="section mt-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card border border-1">
                                <div className="card-body">

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Position</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Email</th>
                                                <th scope="col" className="text-center">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.values(employees).map((employee) => (
                                                <tr key={employee.id}>
                                                    <td>
                                                        <img
                                                            src={employee.img}
                                                            alt={employee.name}
                                                            width="32"
                                                            className="rounded-circle"
                                                        />
                                                    </td>
                                                    <td>{employee.name}</td>
                                                    <td>{employee.position}</td>
                                                    <td>{employee.phone}</td>
                                                    <td>{employee.email}</td>
                                                    <td className="text-center">
                                                        <button
                                                            className="btn btn-primary btn-sm me-2"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addEmployeeModal"
                                                            onClick={() => handleEditClick(employee.id)}
                                                        >
                                                            <i className="bi bi-pencil-square" />
                                                        </button>
                                                        <button
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => handleDelete(employee.id)}
                                                        >
                                                            <i className="bi bi-trash3" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </BackendLayout>
    );
};

export default Employees;
