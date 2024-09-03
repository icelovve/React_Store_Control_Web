import { useState } from "react";
import BackendLayout from "../../components/layout/BackendLayout";

const Order = (props) => {
    const [employees, setEmployees] = useState({
        img: '',
        name: '',
        position: '',
        phone: '',
        email: ''
    });

    const [allEmployees, setAllEmployees] = useState([]);

    const onChangeEmployee = (event) => {
        setEmployees({
            ...employees,
            [event.target.name]: event.target.value
        });
    };

    const onEmployeeSubmit = (event) => {
        event.preventDefault();
        setAllEmployees([...allEmployees, employees]);
        setEmployees({ img: '', name: '', position: '', phone: '', email: '' }); 
    };

    return (
        <BackendLayout title="Order">
            <main id="main" className="main">
                
            </main>
        </BackendLayout>
    );
};

export default Order;
