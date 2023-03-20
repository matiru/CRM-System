import React, { useState } from 'react';
import "./users.css";
import { useSelector } from "react-redux";

import actions from '../images/actions.png';

const UserTable = () => {
  const users = useSelector((state) => state.users.users);
  console.log(users);
 
  

  const [selectedUserType, setSelectedUserType] = useState('Admin')
  
  const [searchText, setSearchText] = useState('');
  
  // Filter users based on selected user type
  const filteredUsers = users.filter(user => user.role === selectedUserType);

  // Filter users based on search text
  const searchedUsers = filteredUsers.filter(user => {
    const search = searchText.toLowerCase();
    const name = user.name.toLowerCase();
    const email = user.email.toLowerCase();
    

    return name.includes(search) || email.includes(search);
  });


  return (
  <div className="user-lisitng-container">
    <div className='user-searchandselect'>
      <select className='user-select' value={selectedUserType} onChange={e => setSelectedUserType(e.target.value)}>
        <option value="Admin">Admin</option>
        <option value="Staff">Staff</option>
        <option value="Customer">Customer</option>
      </select>
      <input className ='user-search'type="text" placeholder="Search" value={searchText} onChange={e => setSearchText(e.target.value)} />
      </div>
      <table>
        <thead>
          
          {selectedUserType === 'Admin' || selectedUserType ==='Staff' || selectedUserType === 'super Admin'? (
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Sales Made</th>
              <th>Date Hired</th>
              <th>Status</th>
            </tr>
          ) : (
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Last Purchase Date</th>
              <th>Loyalty Points</th>
              <th>Number of Purchases</th>
              <th>Actions</th>
            </tr>
          )}
        </thead>
        <tbody>
          {searchedUsers.map(user => (
            <tr  key={user.index}>
              {selectedUserType === 'Admin' || selectedUserType === 'Staff' ? (
                <>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.salesMade}</td>
                  <td>{user.dateHired}</td>
                  <td>{user.status}</td>





                </>
              ) : (
                <>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.lastPurchaseDate}</td>
                  <td>{user.loyaltyPoints}</td>
                  <td>{user.numberOfPurchasesMade}</td>
                  <td className='actions-row'>
                          <img className="actions-img"src={actions} 
                        //   onClick={() => handleEditClick(product)}
                          ></img>
                 </td>
                </>
              )
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
