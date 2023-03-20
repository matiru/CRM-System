import React, { useState } from 'react';
import './profile.css'

function EditProfileForm() {
  const [userName, setUserName] = useState("John Doe");
  const [phoneNumber, setPhoneNumber] = useState("1234567890");
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePic, setProfilePic] = useState('https://www.w3schools.com/howto/img_avatar.png');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleProfilePicChange = (event) => {
    setProfilePic(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('New password and confirm password must match.');
      return;
    }

    // Here you can call a function to update the user information
    // with the new values

    console.log({
      name: userName,
      phoneNumber: phoneNumber,
      newPassword: newPassword,
      profilePic: profilePic,
    });

    alert('Profile updated successfully!');
  };

  return (
    <form className="edit-profile-form" onSubmit={handleSubmit}>
    <div className="profile-pic-container">
      <img src={profilePic} alt="Profile" onClick={() => document.getElementById("profile-pic-input").click()}/>
        <input type="file" id="profile-pic-input" onChange={handleProfilePicChange} accept="image/*" style={{display: "none"}} />
    </div>
    <div className="form-group">
      <label htmlFor="username">User Name</label>
      <input
        className="form-control"
        type="text"
        id="username"
        name="username"
        value={userName}
        onChange={handleUserNameChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone Number</label>
      <input
        className="form-control"
        type="tel"
        id="phone"
        name="phone"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="new-password">New Password</label>
      <input
        className="form-control"
        type="password"
        id="new-password"
        name="new-password"
        value={newPassword}
        onChange={handleNewPasswordChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        className="form-control"
        type="password"
        id="confirm-password"
        name="confirm-password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
    </div>
    <button className="btn btn-primary" type="submit">
      Save
    </button>
  </form>
  );
}

export default EditProfileForm;
