import {NavLink, Outlet} from 'react-router';
import {
  FaCalendar,
  FaCalendarCheck,
  FaHome,
  FaList,
  FaPaypal,
  FaShoppingBag,
  FaShoppingCart,
  FaStar,
  FaVoicemail,
} from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log('admin check', isAdmin);

  const adminNavbar = (
    <>
      <li>
        <NavLink to="/dashboard">
          <FaHome />
          Admin Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/addItems">
          <FaCalendar />
          Add Items
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageItems">
          <FaPaypal /> Manage Items
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageBooking">
          <FaShoppingCart /> Manage Booking
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/allUsers">
          <FaCalendarCheck /> All Users
        </NavLink>
      </li>
    </>
  );

  const userNavbar = (
    <>
      <li>
        <NavLink to="/dashboard">
          <FaHome />
          User Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/reservation">
          <FaCalendar />
          Reservation
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/payment">
          <FaPaypal /> Payment History
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart">
          <FaShoppingCart /> My Cart
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/review">
          <FaStar /> Add Review
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/booking">
          <FaCalendarCheck /> My Booking
        </NavLink>
      </li>
    </>
  );

  const commonNav = (
    <>
      <li>
        <NavLink to="/">
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu">
          <FaList />
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop/salads">
          <FaShoppingBag /> Shop
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop/salads">
          <FaVoicemail /> Contact
        </NavLink>
      </li>
    </>
  );

  const conditionalNavbar = isAdmin ? adminNavbar : userNavbar;

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="navbar bg-[#d19f54a2] shadow-sm text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 min-h-screen shadow bg-[#D1A054] text-black text-xl ">
              {conditionalNavbar}
              <div className="divider"></div>
              {commonNav}
            </ul>
          </div>
          <a className="btn btn-ghost hidden lg:flex text-3xl font-medium capitalize">
            Bistro boss
          </a>
        </div>

        <div className="navbar-end lg:hidden">
          <a className="btn btn-ghost text-3xl font-medium capitalize">
            bistro boss
          </a>
        </div>
      </div>

      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col ">
          {/* Page content here */}
          <Outlet />
        </div>

        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu  text-base-content min-h-full w-80 p-4 bg-[#D1A054] text-xl">
            {/* Sidebar content here */}
            {conditionalNavbar}
            <div className="divider"></div>
            {commonNav}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
