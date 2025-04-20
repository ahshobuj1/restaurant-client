import {Link, NavLink} from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
  const {user, logOutUser} = useAuth();
  const [carts] = useCart();
  const [isAdmin] = useAdmin();

  const totalPrice = carts.reduce(
    (prevPrice, cart) => prevPrice + cart.price,
    0
  );

  const handleLogOut = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to log Out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, LogOut',
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then(() => {
            Swal.fire({
              title: 'Logout!',
              text: 'Your are logged out.',
              icon: 'success',
            });
          })
          .catch((err) => console.log(err));
      }
    });
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>

      <li>
        <NavLink to="shop/salads">Shop</NavLink>
      </li>

      {user && isAdmin && (
        <li>
          <NavLink to="/dashboard/adminHome">Dashboard</NavLink>
        </li>
      )}

      {user && !isAdmin && (
        <li>
          <NavLink to="/dashboard/userHome">Dashboard</NavLink>
        </li>
      )}
    </>
  );

  return (
    <>
      {/* <div className="navbar bg-[#15151583] z-50 shadow-sm fixed w-7xl text-white"> */}
      <div className="navbar max-w-screen-xl fixed text-white bg-[#05050596] z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <a className=" px-5 text-xl">
            Cafe <br /> <span className="">Restaurant</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end space-x-4 flex items-center">
          {user ? (
            <>
              <div className="dropdown dropdown-end mt-1">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle">
                  <div className="indicator">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />{' '}
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {carts.length}
                    </span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                  <div className="card-body">
                    <span className="text-lg font-bold text-black">
                      {carts.length} Items
                    </span>
                    <span className="text-info">Subtotal: ${totalPrice}</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        <Link to="/dashboard/cart">View cart</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                  <li>
                    <a className="justify-between">
                      {user?.email}
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={handleLogOut}>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <NavLink
              to="/login"
              className="btn btn-neutral hover:text-blue-500 btn-sm px-6">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
