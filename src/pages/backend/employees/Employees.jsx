import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import BackendLayout from "../../../components/layout/BackendLayout";
import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";

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
    const [isEditMode, setIsEditMode] = useState(false);
    const [editEmployeeId, setEditEmployeeId] = useState(null);

    const handleDelete = (id) => {
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
                Swal.fire("Deleted!", "The employee has been deleted.", "success");
            }
        });
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

    const handleSaveEmployee = () => {
        if (isEditMode) {
            const updatedEmployees = {
                ...employees,
                [editEmployeeId]: { ...newEmployee, id: editEmployeeId },
            };
            setEmployees(updatedEmployees);
            Swal.fire("Updated!", "The employee has been updated.", "success");
        } else {
            const id = new Date().getTime().toString();
            const employee = { id, ...newEmployee };
            setEmployees({ ...employees, [id]: employee });
            Swal.fire("Added!", "The employee has been added.", "success");
        }
        resetForm();
    };

    const resetForm = () => {
        setNewEmployee({ name: "", position: "", img: "", phone: "", email: "" });
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
                            data-bs-target="#employeeModal"
                            onClick={resetForm}
                        >
                            <i className="bi bi-plus"></i> Add Employee
                        </button>
                    </div>
                </div>
                <EmployeeForm
                    isEditMode={isEditMode}
                    newEmployee={newEmployee}
                    setNewEmployee={setNewEmployee}
                    imagePreview={imagePreview}
                    handleImageChange={handleImageChange}
                    handleSaveEmployee={handleSaveEmployee}
                />
                <section className="section mt-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card border border-1">
                                <div className="card-body">
                                    <EmployeeList
                                        employees={employees}
                                        handleEditClick={handleEditClick}
                                        handleDelete={handleDelete}
                                    />
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
