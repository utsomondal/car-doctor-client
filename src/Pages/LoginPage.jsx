import { Link, useNavigate, useLocation } from "react-router";
import { useAuth } from "../Context/useAuth";

const LoginPage = () => {
  const { loginUser, setLoading, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        alert("User logged in successfully!");
        navigate(location.state?.from?.pathname || "/", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Login failed:", errorMessage, errorCode);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="hero min-h-[calc(100vh-364px)]">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl border border-gray-400">
          <h1 className="text-3xl font-bold text-center border-b border-gray-400 py-3">
            Login now!
          </h1>
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <div>
                <p className="text-center">
                  New to Car Doctor?{" "}
                  <Link to="/registration">
                    <span className="link link-hover">Create an account.</span>
                  </Link>
                </p>
              </div>

              <button type="submit" className="btn btn-neutral mt-4 w-full">
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
