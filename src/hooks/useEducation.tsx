/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";

type Education = {
  id: string;
  courseName: string;
  school: string;
  image: string;
  url: string;
};

export function useEducationApi() {
  const [data, setData] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch all education data
  const getEducation = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/education")
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getEducation();
  }, []);

  // Create a new education entry
  const createEducation = async (newEntry: Omit<Education, "id">) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/education", newEntry);
      setData((prev) => [...prev, res.data]);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  // Delete an education entry by id
  const deleteEducation = async (id: string) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5000/education/${id}`);
      // Remove deleted entry from local state
      setData((prev) => prev.filter((item) => item.id !== id));
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const updateEducation = async (id: number, updatedData: any) => {
    try {
      const res = await fetch(`http://localhost:5000/education/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) {
        throw new Error("Failed to update education");
      }

      return await res.json();
    } catch (error) {
      console.error("Update failed:", error);
      throw error;
    }
  };

  return {
    data,
    loading,
    error,
    createEducation,
    deleteEducation,
    updateEducation,
    refetch: getEducation,
  };
}