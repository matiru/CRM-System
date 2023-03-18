import React, { useState } from 'react';
import { productsObject} from '../data';
import "./products.css";
import actions from '../images/actions.png';
import Modal from 'react-modal';
import EditProductDialog from './edit-product';

function ProductTable() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [products, setProducts] = useState(productsObject);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };
  
  const handleSaveClick = (updatedProduct) => {
    // Update the product in the database here
  
    // Update the local state with the updated product
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );

    alert("Product updated successfully");
    // Close the modal
    setModalIsOpen(false);

  
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
                      <th className="actions-row">ID</th>
                      <th className="actions-row" >Name</th>
                      <th className="actions-row">Category</th>
                      <th className="actions-row">Price</th>
                      <th className="actions-row">Quantity</th>
                      <th className="actions-row">Status</th>
                      <th className="actions-row">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product, index) => (
                      <tr key={product.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                        <td className="actions-row">{product.id}</td>
                        <td className="actions-row" >{product.name}</td>
                        <td className="actions-row">{product.category}</td>
                        <td className="actions-row">${product.price}</td>
                        <td className="actions-row">{product.quantity}</td>
                        <td className="actions-row">{product.status}</td>
                        <td className='actions-row'>
                          <button className="actions-btn" onClick={() => handleEditClick(product)}>
                          <img className="actions-img"src={actions} ></img>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              
            
        
                <Modal className="pro-modal"
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Edit Product Modal"
    >
      <h1 onClick={()=> setModalIsOpen(false)}>X</h1>
      <EditProductDialog
        product={selectedProduct}
        onSave={handleSaveClick}
        onCancel={() => setModalIsOpen(false)}
      />
    </Modal>
    </div>
  );
}

export default ProductTable;
