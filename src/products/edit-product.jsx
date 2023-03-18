import React, { useState } from 'react';
import "./products.css";

function EditProductDialog(props) {
  const { product, onSave, onCancel } = props;

  const [editedProduct, setEditedProduct] = useState(product);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    onSave(editedProduct);
  };

  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <div className="product-form-container">
      <form className="product-form">
        <h2>Edit Product</h2>
        <div className="product-form-group">
          <label className="product-label" htmlFor="name">
            Name:
          </label>
          <input
            className="product-input"
            type="text"
            id="name"
            name="name"
            value={editedProduct.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="product-form-group">
          <label className="product-label" htmlFor="category">
            Category:
          </label>
          <input
            className="product-input"
            type="text"
            id="category"
            name="category"
            value={editedProduct.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="product-form-group">
          <label className="product-label" htmlFor="price">
            Price:
          </label>
          <input
            className="product-input"
            type="text"
            id="price"
            name="price"
            value={editedProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="product-form-group">
          <label className="product-label" htmlFor="quantity">
            Quantity:
          </label>
          <input
            className="product-input"
            type="text"
            id="quantity"
            name="quantity"
            value={editedProduct.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="product-form-group">
          <label className="product-label" htmlFor="status">
            Status:
          </label>
          <select
            className="product-select"
            id="status"
            name="status"
            value={editedProduct.status}
            onChange={handleInputChange}
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
          </select>
        </div>
        <div className="product-form-group">
          <label className="product-label" htmlFor="description">
            Description:
          </label>
          <textarea
            className="product-input"
            id="description"
            name="description"
            value={editedProduct.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="product-form-group">
          <button className="product-button" type="button" onClick={handleSaveClick}>
            Save
          </button>
          <button className="product-button" type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProductDialog;
