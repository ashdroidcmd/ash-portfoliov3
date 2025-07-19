import { useEffect, useState } from "react";
import axios from "axios";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string;
  view?: string;
  createdAt: string;
};

export function useProjectApi() {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProjects = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/projects")
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id: number) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5000/projects/${id}`);
      setData((prev) => prev.filter((item) => item.id !== id));
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const createProject = async (newProj: Omit<Project, "id" | "createdAt">) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/projects", newProj);
      setData((prev) => [...prev, res.data]);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const updateProject = async (
    id: number,
    updatedProj: Omit<Project, "id" | "createdAt">
  ) => {
    try {
      setLoading(true);
      const res = await axios.put(`http://localhost:5000/projects/${id}`, updatedProj);
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
    deleteProject,
    createProject,
    updateProject,
    refetch: fetchProjects,
  };
}
