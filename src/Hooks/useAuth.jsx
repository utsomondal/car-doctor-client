import { useContext } from "react";
import { AuthContext } from "../Utils/AuthContext";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
