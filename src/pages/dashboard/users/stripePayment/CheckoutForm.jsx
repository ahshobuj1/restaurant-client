import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {useEffect, useState} from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useCart from '../../../../hooks/useCart';
import useAuth from '../../../../hooks/useAuth';
import moment from 'moment/moment';
import Swal from 'sweetalert2';

const CheckoutForm = () => {
  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState();
  const [transaction, setTransaction] = useState();

  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const [carts, refetch] = useCart();
  const totalPrice = carts?.reduce((total, cart) => total + cart?.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post('/create-payment-intent', {price: totalPrice})
        .then((res) => setClientSecret(res?.data?.clientSecret))
        .catch((err) => console.log(err));
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    Swal.fire({
      title: 'Are you sure?',
      text: `You want to pay ${totalPrice}$!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Pay!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (!stripe || !elements) {
          return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
          return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });

        if (error) {
          setError(error.message);
        } else {
          console.log(paymentMethod);
          setError('');
        }

        const {paymentIntent, error: confirmError} =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                name: user?.name,
                email: user?.email,
              },
            },
          });

        if (confirmError) {
          setError(confirm.message);
        } else {
          if (paymentIntent.status === 'succeeded') {
            setTransaction(paymentIntent.id);

            const paymentHistory = {
              name: user?.displayName,
              email: user?.email,
              price: totalPrice,
              status: 'success',
              transactionId: paymentIntent.id,
              date: moment().format('MMMM Do YYYY, h:mm:ss a'),
              ids: carts.map((cart) => cart._id),
              cartIds: carts.map((cart) => cart.cartId),
            };

            axiosSecure
              .post('/payments', paymentHistory)
              .then((res) => {
                if (
                  res.data.paymentResult.insertedId > 0 &&
                  res.dada.cartResult.deletedCount > 0
                ) {
                  Swal.fire({
                    title: 'Paid!',
                    text: 'Your payment has been paid.',
                    icon: 'success',
                  });
                }

                refetch();
              })
              .catch((err) => console.log(err));
          }
        }
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-screen-sm mx-auto bg-[#0704040f] p-6 rounded-md">
      <CardElement
        className="max-w-screen-sm mx-auto"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />

      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="btn btn-sm btn-neutral mt-6">
        Pay ${totalPrice}
      </button>

      <p className="text-red-500 mt-2">{error}</p>
      {transaction && (
        <p className="text-green-500 mt-2">
          Payment succeeded, your transactionID: {transaction}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
