import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Registration = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 pr-20">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-4xl font-semibold text-center p-10">
              Registration
            </h1>
            <form onSubmit={handleRegistration}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
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
                  value="Sign Up"
                  className="btn btn-error"
                />
              </div>
            </form>
            <div>
              <p>
                Already Have an account?{" "}
                <Link to="/login" className="font-semibold">
                  {" "}
                  Sign in
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

export default Registration;
