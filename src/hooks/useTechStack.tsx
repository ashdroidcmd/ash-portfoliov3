import { useState, useEffect } from "react";
import axios from "axios";

export type TechStack = {
  id: number;
  name: string;
  image: string;
};

export function useTechStackApi() {
  const [data, setData] = useState<TechStack[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchTechStacks = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/techstack")
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchTechStacks();
  }, []);

  const deleteTechStack = async (id: number) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5000/techstack/${id}`);
      setData((prev) => prev.filter((item) => item.id !== id));
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const createTechStack = async (newTech: Omit<TechStack, "id">) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/techstack", newTech);
      setData((prev) => [...prev, res.data]);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const updateTechStack = async (id: number, updatedTech: Omit<TechStack, "id">) => {
    try {
      setLoading(true);
      const res = await axios.put(`http://localhost:5000/techstack/${id}`, updatedTech);
      setData((prev) =>
        prev.map((item) => (item.id === id ? res.data : item))
      );
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    createTechStack,
    deleteTechStack,
    updateTechStack,
    refetch: fetchTechStacks,
  };
}
