import {useQuery} from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';

const useCart = () => {
  const {user, loading} = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: carts = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await axiosPublic(`/cart?email=${user?.email}`);
      return res?.data;
    },
  });

  return [carts, refetch, isPending];
};

export default useCart;
