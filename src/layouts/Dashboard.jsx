import { Helmet } from "react-helmet-async";
import {
  FaCalendar,
  FaCalendarCheck,
  FaHome,
  FaJediOrder,
  FaShoppingCart,
  FaStar,
  FaUser,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
// import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <div className='flex'>
        <div className='w-64 min-h-screen bg-[#D1A054]'>
          <ul className='menu text-lg font-semibold uppercase'>
            {isAdmin ? (
              <>
                <li>
                  <NavLink to='/dashboard/admin'>
                    <FaUser /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/add-items'>
                    <FaCalendar /> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/manage-items'>
                    <FaWallet /> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/manage-bookings'>
                    <FaShoppingCart /> Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/users'>
                    <FaUsers /> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to='/dashboard/user'>
                    <FaUser /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/reserve'>
                    <FaCalendar /> Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/payment-history'>
                    <FaWallet /> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/cart'>
                    <FaShoppingCart /> My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/review'>
                    <FaStar /> Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/booking'>
                    <FaCalendarCheck /> My Booking
                  </NavLink>
                </li>
              </>
            )}
            <div className='divider'></div>
            <li>
              <NavLink to='/'>
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/our-menu'>
                <FaJediOrder /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop'>
                <FaShop /> Shop
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='flex-1 py-20 px-16'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
