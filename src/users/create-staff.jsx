import React, { useState } from "react";
import "./users.css";
import { usersObject } from '../data'
const genderOptions = ["Male", "Female"];
const roleOptions = ["Admin", "Staff"];
const defaultPassword = "user@2023";

 function CreateStaff() {

  const [users, setUsers] = useState(usersObject);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState(genderOptions[0]);
  const [role, setRole] = useState(roleOptions[0]);
  const id = users.length + 1;

 


  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(users);
    const newUser = { name, email, phone, gender, role, password: defaultPassword ,id};
    console.log(newUser);
    if (users.find(user => user.email === newUser.email)) {
      alert('user already exists')
    } else {
      console.log(newUser, 'new user');
      setUsers((users) => [...users, newUser]); 
      console.log(users);
    alert('user created')
    // clear form
    setName('')
    setEmail('')
    setPhone('')
    setGender(genderOptions[0])
    setRole(roleOptions[0])
    }
  };

  return (
    <div className="emp-form-container">
      <form onSubmit={handleFormSubmit}>
        <div className="emp-form-group">
          <label className="emp-label" htmlFor="name">NAME:</label>
          <input className="emp-input"
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="emp-form-group">
          <label className="emp-label" htmlFor="email">EMAIL:</label>
          <input className="emp-input"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="emp-form-group">
          <label className="emp-label" htmlFor="phone">PHONE:</label>
          <input className="emp-input"
            type="tel"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </div>
        <div className="emp-form-group">
          <label className="emp-label" htmlFor="gender">GENDER:</label>
         <select className="emp-select"
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            required
          >
            {genderOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="emp-form-group">
          <label className="emp-label" htmlFor="role">ROLE:</label>
         <select className="emp-select"
            id="role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            required
          >
            {roleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="emp-form-group">
          <label className="emp-label" htmlFor="default-password">DEFAULT<br></br><br></br>PASSWORD:</label>
          <input className="emp-input"
            type="text"
            id="default-password"
            value={defaultPassword}
            readOnly
            
          />
        </div>
        <button className ="emp-button"type="submit">register</button>
      </form>
    </div>
  );
}
export default CreateStaff;