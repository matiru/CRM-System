import React, { useState } from "react";
import "./users.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/usersSlice";

const genderOptions = ["Male", "Female"];
const roleOptions = ["Customer"];
const defaultPassword = "user@2023";


export default function CreateCustomer() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState(genderOptions[0]);
  const [role, setRole] = useState(roleOptions[0]);
  const users = useSelector((state) => state.users.users);
  const id =  users.length + 1;
  
 

const handleFormSubmit = (event) => {
  event.preventDefault();
  const newUser = { name, email, phone, gender, role, password: defaultPassword ,id};
  if (users.find(user => user.email === newUser.email)) {
    alert('user already exists')
  } else {
   
  dispatch(addUser(newUser))

  alert('user created')
  // clear form
  setName('')
  setEmail('')
  setPhone('')
  setGender(genderOptions[0])
  setRole(roleOptions[0])
  }
  console.log(users);
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

        <button className ="emp-button"type="submit">register</button>
      </form>
    </div>
  );
}
