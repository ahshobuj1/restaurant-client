import {Link} from 'react-router';
import image from '../../assets/others/authentication.png';
import loginImg from '../../assets/others/authentication2.png';
import {useForm} from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section
      style={{backgroundImage: `url(${image})`}}
      className="min-h-screen flex justify-center items-center p-5 md:p-30">
      <div className="grid md:grid-cols-2 shadow-slate-300 shadow-2xl">
        <img src={loginImg} alt="loginImg" />
        <div>
          <div className="card w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  {...register('email', {required: true})}
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                {errors?.email && (
                  <span className="text-red-500">Email field is required</span>
                )}
                <label className="fieldset-label">Password</label>
                <input
                  {...register('password', {required: true})}
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                {errors?.password && (
                  <span className="text-red-500">
                    Password field is required
                  </span>
                )}

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  className="btn btn-neutral mt-4 bg-[#d19f54c0] border-0">
                  Login
                </button>
              </fieldset>
            </form>

            <div className="text-center -mt-4">
              <Link className="text-[#d19f54c0] font-semibold" to="/signup">
                New here ? Create a New Account
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

export default Login;
