import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../authThunk';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(form));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />

      <input name="email" placeholder="Email" onChange={handleChange} />

      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
      />

      <select name="role" onChange={handleChange}>
        <option value="customer"> Customer </option>
        <option value="provider"> Provider </option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
};
