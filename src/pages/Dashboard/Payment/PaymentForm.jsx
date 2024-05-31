import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxoisSecure from "../../../hooks/useAxoisSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxoisSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", {
          price: totalPrice,
        })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment Error: ", error);
      setError(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.id);

        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved: ", res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Payment Done!.",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/dashboard/payment-history");
        }
      }
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}></CardElement>
      <button
        type='submit'
        className='disabled:cursor-not-allowed disabled:bg-color8 disabled:text-color9 bg-color11 p-2 text-lg  font-semibold text-color4 rounded-lg'
        disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className='text-[#FF0000]'>{error}</p>
    </form>
  );
};

export default PaymentForm;
