import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (user && isAdmin) {
    return children;
  }

  if (loading || isAdminLoading) {
    return (
      <div className='text-center py-20'>
        <p>Loading</p>
      </div>
    );
  }

  return <Navigate to='/login' state={{ from: location }}></Navigate>;
};

export default AdminRoute;
