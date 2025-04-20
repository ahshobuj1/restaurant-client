import {useQuery} from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import {FaDollarSign, FaUsers} from 'react-icons/fa';
import {MdProductionQuantityLimits} from 'react-icons/md';
import {LiaCarSideSolid} from 'react-icons/lia';

const AdminHome = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const {data: adminStats = {}} = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      return res?.data;
    },
  });
  // console.log(adminStats);

  return (
    <section>
      <h3 className="text-3xl">
        Hello, Welcome {user?.displayName ? user?.displayName : 'Back'}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto lg:overflow-x-hidden">
        <div className="stats shadow w-56 mx-auto ">
          <div className="stat bg-gradient-to-r from-cyan-200 to-blue-100 ">
            <div className="stat-value text-2xl text-center">
              ${adminStats?.revenue}
            </div>
            <div className="stat-value text-2xl text-center">Revenue</div>
            <div className="stat-figure text-secondary text-2xl">
              <FaDollarSign />
            </div>
          </div>
        </div>
        <div className="stats shadow w-56 mx-auto">
          <div className="stat bg-gradient-to-r from-pink-400 to-slate-50">
            <div className="stat-value text-2xl text-center">
              {adminStats?.users}
            </div>
            <div className="stat-value text-2xl text-center">Customers</div>
            <div className="stat-figure text-secondary text-2xl">
              <FaUsers />
            </div>
          </div>
        </div>
        <div className="stats shadow w-56 mx-auto">
          <div className="stat bg-gradient-to-r from-pink-200 to-indigo-300">
            <div className="stat-value text-2xl text-center">
              {adminStats?.products}
            </div>
            <div className="stat-value text-2xl text-center">Products</div>
            <div className="stat-figure text-secondary text-2xl">
              <MdProductionQuantityLimits />
            </div>
          </div>
        </div>

        <div className="stats shadow w-56 mx-auto">
          <div className="stat bg-gradient-to-r from-sky-200 to-violet-300">
            <div className="stat-value text-2xl text-center">
              {adminStats?.orders}
            </div>
            <div className="stat-value text-2xl text-center">Orders</div>
            <div className="stat-figure text-secondary text-2xl">
              <LiaCarSideSolid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
