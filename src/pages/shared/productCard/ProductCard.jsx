import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useCart from '../../../hooks/useCart';
import {useLocation, useNavigate} from 'react-router';

const ProductCard = ({item}) => {
  const {image, name, recipe, _id, price} = item;
  const {user} = useAuth();
  const axiosPublic = useAxiosPublic();
  const [, refetch] = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      Swal.fire({
        title: 'You are not logged in?',
        text: 'Please, Login to add to the cart!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login!',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: location?.pathname});
        }
      });
    } else {
      const cartInfo = {
        cartId: _id,
        email: user?.email,
        image,
        name,
        recipe,
        price,
      };

      axiosPublic
        .post('/cart', cartInfo)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Added to the cart Successfully',
              showConfirmButton: true,
              timer: 2500,
            });

            refetch();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="bg-[#F3F3F3s] max-w-[420px] max-h-[540px] border-1 border-amber-100 relative">
      <img src={image} alt="image" className="h-72" />
      <div className="text-center py-8 ">
        <h2 className="capitalize text-xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <p className="absolute top-1 right-1 z-40 bg-black text-white">
          ${price}
        </p>
        <button
          onClick={handleAddToCart}
          className="uppercase btn btn-outline border-0 border-b-3 px-5 border-yellow-500 rounded-b-lg mt-6 hover:bg-black hover:text-white duration-500 ">
          add to card
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
