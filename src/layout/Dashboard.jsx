const Dashboard = () => {
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
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 min-h-screen shadow bg-[#D1A054] text-black">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hidden lg:flex">daisyUI</a>
        </div>

        <div className="navbar-end lg:hidden">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
      </div>

      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col ">
          {/* Page content here */}
          <h2>helllo</h2>
        </div>

        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu  text-base-content min-h-full w-80 p-4 bg-[#D1A054]">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
