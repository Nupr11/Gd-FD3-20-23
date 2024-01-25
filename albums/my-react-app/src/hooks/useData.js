import { useEffect, useState } from "react";

export const useData = (request, initial = null) => {
  const [data, setUsers] = useState(initial);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request;
        setUsers(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [request]);

  return { data, loading, error };
};
