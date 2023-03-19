import React, { useState } from 'react';
import './sales.css';
import { usersObject } from '../data'
import { productsObject } from '../data';
import { salesObject } from '../data';
import CreateCustomer from '../users/create-customer';
import Modal from 'react-modal';


const MakeSale = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [product, setProduct] = useState('');
  const [users, setUsers] = useState(usersObject);
  const [products, setProducts] = useState(productsObject);
  const [sales, setSales] = useState(salesObject);
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  const [showAddUserModal, setShowAddUserModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExists = users.some(user => user.email === customerEmail);
    if (!userExists) {
      alert('User does not exist');
      setModalIsOpen(true);
      return;
    }
    const sale = { customerName, customerEmail, product, quantity };
    setCart([...cart, sale]);
    setProduct('');
    setQuantity(0);
  };

  const handleRemove = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleCompleteSale = () => {
    const saleId = Math.floor(Math.random() * 1000000);
    const saleDate = new Date().toISOString();
    const employeeId = 1; // assuming employee id is 1
    const employeeName = 'John Doe'; // assuming employee name is John Doe
    const loyaltyPointsEarned = Math.floor(cart.reduce((acc, sale) => {
      const price = products.find(product => product.name === sale.product)?.price || 0;
      const total = price * sale.quantity;
      return acc + total;
    }, 0) / 10);
    const totalCost = cart.reduce((acc, sale) => {
      const price = products.find(product => product.name === sale.product)?.price || 0;
      const total = price * sale.quantity;
      return acc + total;
    }, 0);
    const saleObject = {
      id: saleId,
      date: saleDate,
      customerId: customerEmail,
      customerName: customerName,
      employeeId: employeeId,
      employeeName: employeeName,
      items: cart,
      total: totalCost,
      status: 'complete',
      loyaltyPoints: loyaltyPointsEarned
    };
    setSales([...sales, saleObject]);
    setCart([]);
    setCustomerName('');
    setCustomerEmail('');
    setProduct('');
    setQuantity(0);
  };

 

  const handleProductSearch = (searchTerm) => {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setProducts(filteredProducts);
  };

  const totalCost = cart.reduce((acc, sale) => {
    const price = products.find(product => product.name === sale.product)?.price || 0;
    const total = price * sale.quantity;
    return acc + total;
  }, 0);

  return (
    <div className="crm-container">
      <h1>Make A Sale</h1>
      <form  className='make-sale-form'onSubmit={handleSubmit}>
        <label  className='make-sale-label' htmlFor="customerName">Customer Name:</label>
        <input className='make-sale-input' type="text" id="customerName" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />

<label htmlFor="customerEmail">Customer Email:</label>
<input className='make-sale-input'  type="email" id="customerEmail" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} required />

<label htmlFor="product">Product:</label>
<input className='make-sale-input' type="text" id="product" value={product} onChange={(e) => setProduct(e.target.value)} required />

{product && (
  <ul>
    {products.filter((p) => p.name.toLowerCase().includes(product.toLowerCase())).map((p) => (
        <li key={p.id} onClick={() => setProduct(p.name)}>{p.name}</li>
    ))}
  </ul>
)}


<label className='make-sale-label' htmlFor="quantity">Quantity:</label>
<input className='make-sale-input' type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />

<button type="submit">Add To Cart</button>
</form>



<div className="sales-container">
  <h2>Sales</h2>
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Total Cost</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {cart.map((item, index) => (
        <tr key={index}>
          <td>{item.product}</td>
          <td>{item.quantity}</td>
          <td>${(item.quantity * products.find(p => p.name === item.product)?.price).toFixed(2)}</td>
          <td><button onClick={() => handleRemove(index)}>Remove</button></td>
        </tr>
      ))}
    </tbody>
  </table>
  <div className="total-cost-container">
    <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
    <button onClick={handleCompleteSale}>Complete Sale</button>
  </div>


  <Modal className="pro-modal"
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Edit Product Modal"
    >
      <h1 onClick={()=> setModalIsOpen(false)}>X</h1>
      <CreateCustomer handleCloseModal={() => setModalIsOpen} />
    </Modal>
</div>

</div>

);
};

export default MakeSale;
