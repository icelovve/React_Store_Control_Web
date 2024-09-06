const ProductCard = ({ product, onEdit, onDelete }) => {
    return (
        <div className="col-md-6 col-lg-4 mb-3 mt-4">
            <div className="card h-100">
                <img
                    src={product.img}
                    className="card-img-top"
                    alt={product.name}
                    height="200"
                />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                        <strong>Price:</strong> {product.price}
                    </p>
                    <p className="card-text">
                        <strong>Availability:</strong> {product.availability}
                    </p>
                    <div className="d-flex justify-content-between mx-auto mt-3">
                        <button
                            type="button"
                            className="btn btn-warning w-100 me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#addProductModal"
                            onClick={() => onEdit(product.id)}
                        >
                            <i className="bi bi-pencil"></i> 
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger w-100 ms-2"
                            onClick={() => onDelete(product.id)}
                        >
                            <i className="bi bi-trash"></i> 
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;
