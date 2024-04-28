import axios from "axios";
import { useEffect, useState } from "react";

export const useGetMyRestaurant = () => {
  const accessToken = localStorage.getItem("token");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/restaurant",
          {
            headers: {
              "x-access-token": accessToken,
            },
          }
        );
        setData(response.data.response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [accessToken]); // Fetch data whenever the accessToken changes
  const restaurant = data;

  return { restaurant, loading, error };
};
