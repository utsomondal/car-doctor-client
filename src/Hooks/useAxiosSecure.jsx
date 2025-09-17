import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useLocation, useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-murex-gamma.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          logoutUser()
            .then(() => {
              navigate("/login", { state: { from: location }, replace: true });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    );
  }, [location, logoutUser, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
