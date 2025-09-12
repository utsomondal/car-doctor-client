import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div>
      <div className="hero min-h-[calc(100vh-364px)]">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl border border-gray-400">
          <h1 className="text-3xl font-bold text-center border-b border-gray-400 py-3">
            Login now!
          </h1>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <p className="text-center">
                  New to Car Doctor?{" "}
                  <Link to="/registration">
                    <span className="link link-hover">Create an account.</span>
                  </Link>
                </p>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
