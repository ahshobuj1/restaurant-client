import {Link, useNavigate} from 'react-router';
import image from '../../assets/others/authentication.png';
import loginImg from '../../assets/others/authentication2.png';
import {useForm} from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import {updateProfile} from 'firebase/auth';
import {auth} from '../../firebase/firebase';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const SignUp = () => {
  const {createUser} = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const {name, photoURL, email, password} = data;

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            const userInfo = {name, photoURL, email};

            axiosPublic
              .post('/user', userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Account Created Successfully',
                    showConfirmButton: false,
                    timer: 2500,
                  });
                  navigate('/');
                }
              })
              .catch((err) => console.log(err));
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  return (
    <section
      style={{backgroundImage: `url(${image})`}}
      className="min-h-screen flex justify-center items-center p-5 md:p-30">
      <div className="grid md:grid-cols-2 gap-10 shadow-slate-300 shadow-2xl py-6">
        <img src={loginImg} alt="loginImg" />
        <div>
          <div className="card w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input
                  {...register('name', {required: true})}
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                {errors?.name && (
                  <span className="text-red-500">Name field is required</span>
                )}
                <label className="fieldset-label">Photo URL</label>
                <input
                  {...register('photoURL', {required: true})}
                  type="text"
                  className="input"
                  placeholder="Photo URL"
                />
                {errors?.photoURL && (
                  <span className="text-red-500">Photo URL is required</span>
                )}
                <label className="fieldset-label">Email</label>
                <input
                  {...register('email', {required: true})}
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                {errors?.email && (
                  <span className="text-red-500">Email field is required</span>
                )}
                <label className="fieldset-label">Password</label>
                <input
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'password min length must be 8 characters',
                    },
                    pattern: {
                      value:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                      message:
                        'At least one upper case, one lower case, one digit and one special characters',
                    },
                  })}
                  type="password"
                  className="input"
                  placeholder="Password"
                />

                <span className="text-red-500">
                  {errors?.password?.message}
                </span>

                {errors?.pattern && (
                  <span className="text-red-500">
                    Password must be one uppercase,one lowercase one special
                    character and at least 6 digit
                  </span>
                )}

                <button
                  type="submit"
                  className="btn btn-neutral mt-4 bg-[#d19f54c0] border-0">
                  SignUp
                </button>
              </fieldset>
            </form>

            <div className="text-center -mt-4">
              <Link
                className="text-[#d19f54c0] font-semibold hover:text-blue-500 hover:border-b-2 duration-200"
                to="/login">
                Already have an Account ? Login please
              </Link>
              <p>Or Signin With</p>
              <p>google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
