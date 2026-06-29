import { API_URL } from "../constants";

export const getUsers = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return await response.json();
};