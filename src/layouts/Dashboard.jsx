import {
  FaCalendar,
  FaCalendarCheck,
  FaHome,
  FaJediOrder,
  FaShoppingCart,
  FaStar,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
// import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className='flex'>
      <div className='w-64 min-h-screen bg-[#D1A054]'>
        <ul className='menu text-lg font-semibold uppercase'>
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
            <NavLink to='/dashboard/payment'>
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
  );
};

export default Dashboard;
