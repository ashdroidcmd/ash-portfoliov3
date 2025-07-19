import { useEffect, useState } from "react";
import axios from "axios";

type Experience = {
  id: number;
  companyName: string;
  jobTitle: string;
  date: string;
  image: string;
};

export function useExperienceApi() {
  const [data, setData] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchExperience = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/experiences")
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  const deleteExperience = async (id: number) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5000/experiences/${id}`);
      setData((prev) => prev.filter((item) => item.id !== id));
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const createExperience = async (newExp: Omit<Experience, "id">) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/experiences", newExp);
      setData((prev) => [...prev, res.data]);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };
  
  const updateExperience = async (id: number, updatedExp: Omit<Experience, "id">) => {
    try {
      setLoading(true);
      const res = await axios.put(`http://localhost:5000/experiences/${id}`, updatedExp);
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
    deleteExperience,
    createExperience,
    updateExperience,
    refetch: fetchExperience,
  };
}
