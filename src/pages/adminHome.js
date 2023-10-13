// AdminHomePage.js
import React from "react";

const AdminHomePage = ({ users }) => {
  try {
    if (users.length === 0 || users == null) {
      return <div className="container mt-4">No users found.</div>;
    }
  } catch (err) {
    return <div className="container mt-4">No users found.</div>;
  }
  return (
    <div className="container mt-4">
      <h1>Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHomePage;
