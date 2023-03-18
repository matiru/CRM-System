import React, { useState } from "react";
import "./products.css";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    status: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(product);
  };

  return (
    <div className="product-form-container">
      <form onSubmit={handleSubmit}>
        <div className="product-form-group">
          <label htmlFor="name" className="product-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="product-input"
          />
        </div>
        <div className="product-form-group">
          <label htmlFor="category" className="product-label">
            Category:
          </label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="product-input"
          />
        </div>
        <div className="product-form-group">
          <label htmlFor="price" className="product-label">
            Price:
          </label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="product-input"
          />
        </div>
        <div className="product-form-group">
          <label htmlFor="quantity" className="product-label">
            Quantity:
          </label>
          <input
            type="text"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
            className="product-input"
          />
        </div>
        <div className="product-form-group">
          <label htmlFor="status" className="product-label">
            Status:
          </label>
          <select
            name="status"
            value={product.status}
            onChange={handleInputChange}
            className="product-select"
          >
            <option value="">-- Select status --</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
          </select>
        </div>
        <div className="product-form-group">
          <label htmlFor="description" className="product-label">
            Description:
          </label>
          <textarea
            onChange={handleInputChange}
            className="product-input"
          />
        </div>
        <button type="submit" className="product-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
