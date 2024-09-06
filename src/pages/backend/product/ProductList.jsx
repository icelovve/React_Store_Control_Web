// ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onEdit, onDelete }) => {
    return (
        <section className="section dashboard">
            <div className="row">
                {Object.keys(products).map(key => (
                    <ProductCard
                        key={products[key].id}
                        product={products[key]}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
