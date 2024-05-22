import { useQuery } from "@tanstack/react-query";
import useAxoisSecure from "./useAxoisSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxoisSecure();
  const { user } = useAuth();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
