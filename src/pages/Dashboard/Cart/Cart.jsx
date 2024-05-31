import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxoisSecure from "../../../hooks/useAxoisSecure";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxoisSecure();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    });
  };

  return (
    <div>
      <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My Cart"} />
      <div>
        <div className='text-3xl mb-5 font-bold text-color3 font-cinzel flex justify-between items-center'>
          <h2 className=''>Total orders: {cart.length}</h2>
          <h2>Total Price: ${totalPrice}</h2>
          {cart.length !== 0 ? (
            <Link to='/dashboard/payment'>
              <button className='bg-[#D1A054] text-color4 p-2 rounded-lg'>
                Pay
              </button>
            </Link>
          ) : (
            <button
              disabled={true}
              className='disabled:cursor-not-allowed bg-color8 text-color9 p-2 rounded-lg'>
              Pay
            </button>
          )}
        </div>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead className=''>
              <tr className='uppercase rounded bg-[#D1A054] text-color4 font-semibold'>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='mask mask-squircle w-12 h-12'>
                          <img
                            src={item.image}
                            alt='Avatar Tailwind CSS Component'
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className='bg-[#B91C1C] text-color4 p-2 rounded-md'>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Cart;
