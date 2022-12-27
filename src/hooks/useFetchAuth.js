import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";

const useFetchAuth = (url) => {

  const {auth} = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
            process.env.REACT_APP_API_URL+url,{
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + auth?.accessToken
            }
          }
        )
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchAuth;
