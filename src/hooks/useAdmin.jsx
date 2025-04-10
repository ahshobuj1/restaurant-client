import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import {useQuery} from '@tanstack/react-query';

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const {user, loading} = useAuth();

  const {data: isAdmin, isPending: isAdminLoading} = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`user/admin/${user.email}`);
      return res?.data?.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
