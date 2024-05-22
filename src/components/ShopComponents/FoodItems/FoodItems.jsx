import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAxoisSecure from "../../../hooks/useAxoisSecure";
import useCart from "../../../hooks/useCart";

const FoodItems = ({ foodItem }) => {
  const { name, recipe, image } = foodItem;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxoisSecure();
  const [, refatch] = useCart();

  const handleFoodCart = (food) => {
    const { name, image, price, _id } = food;

    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("Food added to cart successfully!");
            refatch();
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    } else {
      Swal.fire({
        title: "You aren't login",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className='bg-color10 card'>
      <img src={image} alt='' />
      <div className='card-body text-center p-10'>
        <h3 className='text-2xl font-semibold text-color3'>{name}</h3>
        <p className='text-base text-color3 mt-2'>{recipe}</p>
        <button
          onClick={() => handleFoodCart(foodItem)}
          className='text-color11 mt-6 hover:bg-color1 hover:border-b-color1 bg-color9 border-b-2 rounded-xl border-b-color11 uppercase px-4 py-3 font-medium text-xl'>
          Add to Cart
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default FoodItems;
