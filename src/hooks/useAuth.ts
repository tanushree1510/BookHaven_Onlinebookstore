import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { auth } from '../services/api';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useAuth = () => {
  const { user, setUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !user) {
      // Validate token and get user data
      auth.validateToken()
        .then(({ user }) => setUser(user))
        .catch(() => {
          localStorage.removeItem('token');
          setUser(null);
        });
    }
  }, [user, setUser]);

  const login = async (email: string, password: string) => {
    try {
      const { token, user } = await auth.login({ email, password });
      localStorage.setItem('token', token);
      setUser(user);
      toast.success('Login successful!');
      navigate(user.isAdmin ? '/admin' : '/dashboard');
    } catch (error) {
      toast.error('Invalid credentials');
      throw error;
    }
  };

  const register = async (userData: any) => {
    try {
      const { token, user } = await auth.register(userData);
      localStorage.setItem('token', token);
      setUser(user);
      toast.success('Registration successful!');
      navigate('/login');
    } catch (error) {
      toast.error('Registration failed');
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
    toast.success('Logged out successfully');
  };

  return {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
};