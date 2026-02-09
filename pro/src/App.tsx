import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Layout } from './components/layout/Layout';
import Landing from './pages/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import CustomerDashboard from './pages/Customer/Dashboard';
import ProviderDashboard from './pages/Provider/Dashboard';
import AdminDashboard from './pages/Admin/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={
            <Layout>
              <CustomerDashboard />
            </Layout>
          } />

          <Route path="/provider" element={
            <Layout>
              <ProviderDashboard />
            </Layout>
          } />

          <Route path="/admin" element={
            <Layout>
              <AdminDashboard />
            </Layout>
          } />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
