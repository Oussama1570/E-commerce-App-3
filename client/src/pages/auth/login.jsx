import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '@/store/auth-slice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = { email: "admin@example.com", password: "admin123" };
    await dispatch(loginUser(credentials)); // Dispatch login action
  };

  // Redirect after login if user is admin
  useEffect(() => {
    if (isAuthenticated && user?.role === "admin") {
      navigate("/admin/dashboard");
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login as Admin</button>
    </div>
  );
}

export default Login;
