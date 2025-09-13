import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../Context/useAuth";

const RegistrationPage = () => {
  const { registerUser, setLoading, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    registerUser(email, password)
      .then(() => {
        alert("User registered successfully!");
        navigate(location.state?.from?.pathname || "/", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Registration failed:", errorMessage, errorCode);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="hero min-h-[calc(100vh-364px)]">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl border border-gray-400">
          <h1 className="text-3xl font-bold text-center border-b border-gray-400 py-3">
            Register now!
          </h1>
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
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
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="link link-hover">Login here.</span>
                  </Link>
                </p>
              </div>

              <button type="submit" className="btn btn-neutral mt-4 w-full">
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Registering...
                  </>
                ) : (
                  "Register"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
