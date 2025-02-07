import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);

  // Fetch all users
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Add or Update User
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, password };

    try {
      if (editingUserId) {
        // Update user
        await axios.put(`http://localhost:5000/api/users/${editingUserId}`, userData);
        setEditingUserId(null);
      } else {
        // Add new user
        await axios.post('http://localhost:5000/api/users', userData);
      }
      fetchUsers(); // Refresh the list
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  // Edit User
  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
    setEditingUserId(user.id);
  };

  // Delete User
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsers(); // Refresh the list
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>User List</h1>

      {/* Add/Edit User Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">
          {editingUserId ? 'Update User' : 'Add User'}
        </button>
      </form>

      {/* User List */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;