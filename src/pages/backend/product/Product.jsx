// Product.jsx
import React, { useState } from 'react';
import BackendLayout from '../../components/layout/BackendLayout';
import Swal from 'sweetalert2';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

const initialProduct = {
    1: {
        id: "1",
        img: "/assets/img/product-1.jpg",
        name: "Sports Shoes",
        description: "Sports shoes are a type of footwear specifically designed for sports and physical activities. They provide support, cushioning, and grip to enhance performance and prevent injuries.",
        price: "$6000",
        availability: "23"
    },
    2: {
        id: "2",
        img: "/assets/img/product-2.jpg",
        name: "Smart Watch",
        description: "A smart watch is a wearable device that tracks fitness, receives notifications, and provides access to apps, allowing you to stay connected and monitor your health on the go.",
        price: "$12000",
        availability: "8"
    },
    3: {
        id: "3",
        img: "/assets/img/product-3.jpg",
        name: "Serum",
        description: "This facial serum is designed to hydrate, brighten, and nourish the skin, reducing the appearance of wrinkles and leaving your skin looking radiant and smooth.",
        price: "$500",
        availability: "72"
    },
    4: {
        id: "4",
        img: "/assets/img/product-4.jpg",
        name: "Sunglasses",
        description: "These stylish sunglasses provide UV protection, reducing glare and protecting your eyes while offering a modern, fashionable look.",
        price: "$200",
        availability: "44"
    },
    5: {
        id: "5",
        img: "/assets/img/product-5.jpg",
        name: "Earphones",
        description: "High-quality wireless earphones designed for clear sound, deep bass, and noise cancellation, providing a premium listening experience.",
        price: "$5000",
        availability: "5"
    }
};

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
        <BackendLayout>
            <div className="container mt-4">
                <div className="mb-3">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addProductModal"
                        onClick={handleClose}
                    >
                        <i className="bi bi-plus-circle"></i> Add Product
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
        </BackendLayout>
    );
};

export default Product;
