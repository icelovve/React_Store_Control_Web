// ProductForm.jsx
import React from 'react';

const ProductForm = ({
    newProduct,
    imagePreview,
    isEditMode,
    handleImageChange,
    handleInputChange,
    handleSubmit,
    handleClose
}) => {
    return (
        <div
            className="modal fade"
            id="addProductModal"
            tabIndex="-1"
            aria-labelledby="addProductModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addProductModalLabel">
                            {isEditMode ? "Edit Product" : "Add Product"}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={handleClose}
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
                                        value={newProduct.name}
                                        onChange={(e) =>
                                            handleInputChange('name', e.target.value)
                                        }
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="description" className="form-label">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        value={newProduct.description}
                                        onChange={(e) =>
                                            handleInputChange('description', e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="price" className="form-label">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="price"
                                        value={newProduct.price}
                                        onChange={(e) =>
                                            handleInputChange('price', e.target.value)
                                        }
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="availability" className="form-label">
                                        Availability
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="availability"
                                        value={newProduct.availability}
                                        onChange={(e) =>
                                            handleInputChange('availability', e.target.value)
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
                            onClick={handleClose}
                        >
                            Close
                        </button>
                        {isEditMode ? (
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={handleSubmit}
                                data-bs-dismiss="modal"
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                                data-bs-dismiss="modal"
                            >
                                Add Product
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;
