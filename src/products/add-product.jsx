import React, { useState } from "react";
import "./products.css";
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/slices/productsSlice';
import { useSelector } from 'react-redux';


function ProductForm() {

  const dispatch = useDispatch();
   const products = useSelector((state) => state.products)
// i want to get the last id of the products array and add 1 to it to get the new id
// then set details of the new product and new id to theto the redux store
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    category: "",
    price: "",
    quantity: "",
    status: "pending",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });

  }

  // make a function to add the product to the  redux store then clear the form it should be async such that it 
  // waits for the product to be added to the store before clearing the form

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addProduct(product));
    alert('product added')
    setProduct({
      id: 0,
      name: "",
      category: "",
      price: "",
      quantity: "",
      status: "pending",
    });
    console.log(products);
  }



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
        <button onClick={handleSubmit} type="submit" className="product-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
