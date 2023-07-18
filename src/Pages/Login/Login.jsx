import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 pr-20">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-4xl font-semibold text-center p-10">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign In"
                  className="btn btn-error"
                />
              </div>
            </form>
            <div>
              <p>
                New Here?{" "}
                <Link to="/registration" className="font-semibold">
                  Register Now!
                </Link>{" "}
              </p>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-1/3">
                {/* Your first sign up icon */}
                <img
                  src="your-icon-url"
                  alt="Icon 1"
                  className="h-6 w-6 object-cover"
                />
              </div>
              <div className="w-1/3">
                {/* Your second sign up icon */}
                <img
                  src="your-icon-url"
                  alt="Icon 2"
                  className="h-6 w-6 object-cover"
                />
              </div>
              <div className="w-1/3">
                {/* Your third sign up icon */}
                <img
                  src="your-icon-url"
                  alt="Icon 3"
                  className="h-6 w-6 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
