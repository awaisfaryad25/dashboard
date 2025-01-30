const BASE_URL = "https://jsonplaceholder.typicode.com"; // REPLACE WITH ACTUAL BASE URL

export const API_URL = BASE_URL + "/api/v1";

export const apiConfig = {
  baseUrl: `${API_URL}`,
  endPoints: {
    fetchProfile: `/users/1`,
  },
};
