const EmployeeList = ({ employees, handleEditClick, handleDelete }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col" className="text-center">Actions</th>
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
                                data-bs-target="#employeeModal"
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
    );
};

export default EmployeeList;
