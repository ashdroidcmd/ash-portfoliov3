/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";

export type TechStack = {
  id: number;
  name: string;
  image: string;
  category?: string;
};

export function useTechStackApi(category: string = "") {
  const [data, setData] = useState<TechStack[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const fetchTechStacks = () => {
    setLoading(true);
    const query = category ? `?category=${encodeURIComponent(category)}` : "";
    axios
      .get(`${BASE_URL}/techstack${query}`)
      .then((res) => {
        const sortedData = res.data.sort(
          (a: { id: number }, b: { id: number }) => a.id - b.id,
        );
        setData(sortedData);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchTechStacks();
  }, [category]);

  const deleteTechStack = async (id: number) => {
    try {
      setLoading(true);
      await axios.delete(`${BASE_URL}/techstack/${id}`);
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
      const res = await axios.post(`${BASE_URL}/techstack`, newTech);
      setData((prev) => [...prev, res.data]);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const updateTechStack = async (
    id: number,
    updatedTech: Omit<TechStack, "id">,
  ) => {
    try {
      setLoading(true);
      const res = await axios.put(`${BASE_URL}/techstack/${id}`, updatedTech);
      setData((prev) => prev.map((item) => (item.id === id ? res.data : item)));
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
