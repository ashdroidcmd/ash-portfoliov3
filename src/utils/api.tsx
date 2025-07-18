const baseURL = import.meta.env.VITE_API_BASE_URL;

export const getApiUrl = (endpoint: string) => `${baseURL}${endpoint}`;
