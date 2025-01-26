import { useEffect, useState } from "react";

export const useSwapiResource = (fetchResource) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchResource();
        setData(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchResource]);


  return {data, loading, error}
}