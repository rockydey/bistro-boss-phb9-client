import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then(() => {
      toast.success("User logged out successfully!");
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact Us</NavLink>
      </li>
      <li>
        <NavLink to='/dashboard'>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to='/our-menu'>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to='/shop'>Our Shop</NavLink>
      </li>
      {user ? (
        <li>
          <button
            onClick={handleLogout}
            className='text-xl font-semibold hover:bg-color11 bg-color11'>
            Logout
          </button>
        </li>
      ) : (
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className='bg-[#15151580] fixed top-0 max-w-screen-2xl w-full z-50'>
      <div className=''>
        <div className='navbar px-0 text-color4'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-[14px] z-[1] p-2 shadow  bg-[#15151580] rounded-box w-52'>
                {navLinks}
              </ul>
            </div>
            <Link to='/' className='font-cinzel uppercase text-color4 lg:pl-5'>
              <p className=' text-2xl md:text-[32px] font-black'>Bistro Boss</p>
              <p className='text-lg md:text-2xl font-bold tracking-[6px] md:tracking-[7px]'>
                Restaurant
              </p>
            </Link>
          </div>
          <div className='navbar-end hidden lg:flex'>
            <ul className='menu menu-horizontal text-lg font-medium uppercase'>
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Header;
