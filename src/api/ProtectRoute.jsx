import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/isAuthenticated",
          {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          }
        );
        setIsAuthenticated(response.data.success);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <div>LOADING...</div>;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};
export default ProtectRoute;
