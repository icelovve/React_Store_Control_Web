// Product.jsx
import { useState } from 'react';
import BackendLayout from '../../../components/layout/BackendLayout';
import Swal from 'sweetalert2';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import initialProduct from './initialProduct';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {
    const [product, setProduct] = useState(initialProduct);
    const [newProduct, setNewProduct] = useState({
        img: "",
        name: "",
        description: "",
        price: "",
        availability: ""
    });
    const [imagePreview, setImagePreview] = useState("");
    const [isEditMode, setIsEditMode] = useState(false);
    const [editProductId, setEditProductId] = useState(null);

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
                    const updatedProduct = { ...product };
                    delete updatedProduct[id];
                    setProduct(updatedProduct);

                    Swal.fire({
                        title: "Deleted!",
                        text: "The product has been deleted.",
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
            setNewProduct({ ...newProduct, img: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (field, value) => {
        setNewProduct({ ...newProduct, [field]: value });
    };

    const resetForm = () => {
        setNewProduct({
            img: "",
            name: "",
            description: "",
            price: "",
            availability: ""
        });
        setImagePreview('');
        setIsEditMode(false);
        setEditProductId(null);
    };

    const handleAddProduct = () => {
        const id = new Date().getTime().toString();
        const newProd = {
            id,
            ...newProduct
        };
        setProduct({ ...product, [id]: newProd });
        resetForm();
        Swal.fire({
            title: "Added!",
            text: "The product has been added.",
            icon: "success",
        });
    };

    const handleEditProduct = () => {
        const updatedProducts = {
            ...product,
            [editProductId]: {
                ...newProduct,
                id: editProductId
            }
        };
        setProduct(updatedProducts);
        resetForm();
        Swal.fire({
            title: "Updated!",
            text: "The product has been updated.",
            icon: "success",
        });
    };

    const handleSubmit = () => {
        if (isEditMode) {
            handleEditProduct();
        } else {
            handleAddProduct();
        }
    };

    const handleEdit = (id) => {
        setIsEditMode(true);
        setEditProductId(id);
        setNewProduct({ ...product[id] });
        setImagePreview(product[id].img);
    };

    const handleClose = () => {
        resetForm();
    };

    return (
        <BackendLayout title="Product">
            <>
                <div className="pagetitle">
                    <h1 className="my-3">Product Management</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <Link
                                className="breadcrumb-item active small text-decoration-none fw-light"
                                to="/home"
                            >
                                Home
                            </Link>
                            <li className="breadcrumb-item small fw-light">
                                Product Management
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="container mt-4">
                    <div className="d-flex justify-content-end mb-3">
                        <button
                            type="button"
                            className="btn btn-success"
                            data-bs-toggle="modal"
                            data-bs-target="#ProductModal"
                            onClick={resetForm}
                        >
                            <i className="bi bi-plus"></i> Add Product
                        </button>

                    </div>
                    <ProductList
                        products={product}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                    <ProductForm
                        newProduct={newProduct}
                        imagePreview={imagePreview}
                        isEditMode={isEditMode}
                        handleImageChange={handleImageChange}
                        handleInputChange={handleInputChange}
                        handleSubmit={handleSubmit}
                        handleClose={handleClose}
                    />
                </div>
            </>
        </BackendLayout>
    );
};

export default Product;
