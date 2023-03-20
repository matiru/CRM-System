import React from "react";


function ProfileView() {
    const name = "John Doe";
    const email = "jon@gmail.com";
    const phone = "1234567890";
    const gender = "Male";
    const role = "Admin";



    
  return (
    <div className="profile-container">
      <h2>Profile Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
}

export default ProfileView;


