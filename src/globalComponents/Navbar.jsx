import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between w-300 p-3 m-auto">
      <div className="logo">Verjax</div>

      <div className="flex gap-4">
        <div onClick={() => navigate('/register')}>Register</div>
        <div onClick={() => navigate('/login')}>Login</div>
      </div>
    </div>
  );
};
