import React, { useState } from 'react';
import { salesObject } from '../data';
import './sales.css';


function SalesTable() {
 const [sales, setSales] = useState(salesObject)
 sales.sort((a, b) => (a.id > b.id) ? 1 : -1)
 const [filterEmployee, setFilterEmployee] = useState('');
 const [filterCustomer, setFilterCustomer] = useState('');
 const [filterStatus, setFilterStatus] = useState('');


 const filteredSales = sales.filter((sale) => {
   return (
     sale.employee.name.toLowerCase().includes(filterEmployee.toLowerCase()) &&
     sale.customer.name.toLowerCase().includes(filterCustomer.toLowerCase()) &&
     (filterStatus === '' || sale.items.some((item) => item.status === filterStatus))
   );
 });

 return (
   <div className='sales-lisitng-container'>
    <div className='sales-searchandselect'>
     <label className='make-sale-label'>
       Employee Name:
       <input className='make-sale-input'
         type="text"
         value={filterEmployee}
         onChange={(event) => setFilterEmployee(event.target.value)}
       />
     </label>
     <label className='make-sale-label'>
       Customer Name:
       <input className='make-sale-input'
         type="text"
         value={filterCustomer}
         onChange={(event) => setFilterCustomer(event.target.value)}
       />
     </label>
     <label className='make-sale-label'>
       Status:
       <select className='make-sale-input' value={filterStatus} onChange={(event) => setFilterStatus(event.target.value)}>
         <option value="">All</option>
         <option value="Complete">Complete</option>
         <option value="Refunded">Refunded</option>
       </select>
     </label>
     </div>
     <h2>Sales Table</h2>
     <table className='sales-table'>
       <thead className='sales-table-header'>
         <tr>
           <th className='sales-table-header-cell'>Sale ID</th>
          
           <th className='sales-table-header-cell'>Employee</th>
           <th className='sales-table-header-cell'>Customer</th>
           <th className='sales-table-header-cell'>Total Amount</th>
           <th className='sales-table-header-cell'>products</th>
           <th className='sales-table-header-cell'>status</th>
        </tr>
       </thead>
       <tbody>
         {filteredSales.map((sale) => (
           sale.items.map((item, index) => (
             <tr key={`${sale.id}-${index}`} className={item.status === 'Refunded' ? 'refunded-item' : ''}>
               {index === 0 && (
                 <>
                   <td rowSpan={sale.items.length} className='sales-table-cell'>{sale.id}</td>
                   
                   <td rowSpan={sale.items.length} className='sales-table-cell'>{`${sale.employee.id} - ${sale.employee.name}`}</td>
                   <td rowSpan={sale.items.length} className='sales-table-cell'>{`${sale.customer.id} - ${sale.customer.name}`}</td>
                   <td rowSpan={sale.items.length} className='sales-table-cell'>{`$${sale.totalAmount.toFixed(2)}`}</td>
                 </>
               )}
               <td className='sales-table-cell'>{item.productName}</td>
               <td className='sales-table-cell'>{item.status}</td>
             </tr>
           ))
         ))}
       </tbody>
     </table>
   </div>
 );
}

export default SalesTable;

