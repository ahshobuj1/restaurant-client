import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useCart from '../../../../hooks/useCart';
import TaleRow from './tableRow/TaleRow';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import {Link} from 'react-router';

const Cart = () => {
  const [carts, refetch] = useCart();
  const totalPrice = carts.reduce((prev, cart) => prev + cart.price, 0);
  const axiosPublic = useAxiosPublic();

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/cart/${id}`)
          .then((res) => {
            if (res?.data?.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your item has been deleted.',
                icon: 'success',
              });

              refetch();
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <section className="p-10">
      <SectionTitle heading={'wanna add more'} subHeading={'my cart'} />
      <div className="bg-base-200 p-2 rounded-xl">
        <div className="flex justify-evenly mb-8">
          <h2 className="text-2xl uppercase">Total Orders: {carts.length}</h2>
          <h2 className="text-2xl uppercase">Total price: {totalPrice}</h2>

          {totalPrice > 0 ? (
            <Link to="/dashboard/payment">
              <button className="btn btn-neutral text-xl uppercase">Pay</button>
            </Link>
          ) : (
            <button disabled className="btn btn-neutral text-xl uppercase">
              Pay
            </button>
          )}
        </div>

        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cart, idx) => (
                  <TaleRow
                    key={cart._id}
                    handleDelete={handleDelete}
                    cart={cart}
                    idx={idx}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
