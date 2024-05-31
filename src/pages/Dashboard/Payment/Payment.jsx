import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);

const Payment = () => {
  return (
    <div>
      <SectionTitle heading='Payment' subHeading='Please pay first' />
      <div className='max-w-screen-md mx-auto'>
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
