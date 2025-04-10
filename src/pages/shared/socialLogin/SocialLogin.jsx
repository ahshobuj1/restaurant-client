import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import {useLocation, useNavigate} from 'react-router';
import Swal from 'sweetalert2';

const SocialLogin = () => {
  const {googleLogin} = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const userInfo = {
          name: res?.user?.displayName,
          photoURL: res?.user?.photoURL,
          email: res?.user?.email,
        };

        axiosPublic
          .post('/user', userInfo)
          .then((res) => {
            console.log(res);
            navigate(location?.state ? location?.state : '/');
            if (res?.data?.insertedId) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your account has been logged in successfully',
                showConfirmButton: false,
                timer: 3000,
              });
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center gap-6 my-6 text-3xl">
      <button onClick={handleGoogleLogin}>
        <FaGoogle />
      </button>
      <FaFacebook />
      <FaGithub />
    </div>
  );
};

export default SocialLogin;
