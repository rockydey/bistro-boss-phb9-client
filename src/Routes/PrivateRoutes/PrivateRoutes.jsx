import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return (
      <div className='text-center py-20'>
        <p>Loading</p>
      </div>
    );
  }

  return <Navigate to='/login' state={{ from: location }}></Navigate>;
};

export default PrivateRoutes;
