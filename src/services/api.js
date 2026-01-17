import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_N8N_WEBHOOK_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiService = {
  createUser: async (userData) => {
    try {
      const response = await apiClient.post("/create-user", userData);
      return response.data;
    } catch (error) {
      console.error("API Service Error (createUser):", error);
      throw error.response ? error.response.data : new Error("Network Error");
    }
  },

  getUserProfile: async (username) => {
    try {
      const response = await apiClient.get("/get-profile", {
        params: { username },
      });
      return response.data;
    } catch (error) {
      console.error("API Service Error (getUserProfile):", error);
      throw error.response ? error.response.data : new Error("Network Error");
    }
  },

  createBlog: async (blogData) => {
    try {
      const response = await apiClient.post("/create-blog", blogData);
      return response.data;
    } catch (error) {
      console.error("API Service Error (createBlog):", error);
      throw error;
    }
  },

  getBlogs: async (filters = {}) => {
    try {
      const response = await apiClient.get("/get-blogs", { params: filters });
      return response.data;
    } catch (error) {
      console.error("API Service Error (getBlogs):", error);
      throw error;
    }
  },
};
