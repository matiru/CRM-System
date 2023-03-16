import React, { useState } from 'react';
import { productsObject} from '../data';
import "./products.css";

function ProductTable() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [products, setProducts] = useState(productsObject);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
  };

  const handleSaveClick = (updatedProduct) => {
    // TODO: Update the product in the database and then update the local state with the updated product
    setSelectedProduct(null);
  };

  const handleCancelClick = () => {
    setSelectedProduct(null);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const filterLowerCase = filterText.toLowerCase();
    const idMatch = product.id.toString().includes(filterLowerCase);
    const categoryMatch = product.category.toLowerCase().includes(filterLowerCase);
    const nameMatch = product.name.toLowerCase().includes(filterLowerCase);
    const statusMatch = product.status.toLowerCase().includes(filterLowerCase);
    return idMatch || categoryMatch || nameMatch || statusMatch;
  });

  return (
          <div className="product-lisitng-container">
                  <div className="search-bar-div">
                    <label>Search:</label>
                    <input type="text" className="search-bar-prod" value={filterText} onChange={handleFilterChange} />
                  </div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product, index) => (
                      <tr key={product.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>${product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.status}</td>
                        <td>
                          <button className="btn btn-sm btn-primary" onClick={() => handleEditClick(product)}>Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              
            
        
      {/* {selectedProduct && (
        <EditProductDialog
          product={selectedProduct}
          onSave={handleSaveClick}
          onCancel={handleCancelClick}
        />
      )} */}
    </div>
  );
}

export default ProductTable;
