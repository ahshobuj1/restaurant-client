import {FaTrash, FaTrashAlt} from 'react-icons/fa';
import useCart from '../../../../hooks/useCart';

const Cart = () => {
  const [carts] = useCart();
  const totalPrice = carts.reduce((prev, cart) => prev + cart.price, 0);

  return (
    <section className="p-10">
      <div className="bg-base-200 p-2 rounded-xl">
        <div className="flex justify-evenly mb-8">
          <h2 className="text-2xl uppercase">Total Orders: {carts.length}</h2>
          <h2 className="text-2xl uppercase">Total price: {totalPrice}</h2>
          <button className="btn btn-neutral text-xl uppercase">Pay</button>
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
                  <tr>
                    <td>{idx + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={cart?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{cart?.name}</td>
                    <td>{cart?.price}</td>
                    <td>
                      <button className="btn btn-sm text-red-600 text-2xl hover:text-blue-600 ">
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
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
