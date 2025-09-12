import { Link } from "react-router";

const RegistrationPage = () => {
  return (
    <div>
      <div className="hero min-h-[calc(100vh-364px)]">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl border border-gray-400">
          <h1 className="text-3xl font-bold text-center border-b border-gray-400 py-3">
            Register now!
          </h1>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <p className="text-center">
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="link link-hover">Login here.</span>
                  </Link>
                </p>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
