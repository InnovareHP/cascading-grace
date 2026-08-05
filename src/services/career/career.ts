import axios from "axios";

export const CreateCareerEmail = async (
  name: string,
  email: string,
  phone: string,
  position: string,
  message: string
) => {
  const response = await axios.post("/api/career", {
    name,
    email,
    phone,
    position,
    message,
  });

  if (response.status !== 200) {
    throw new Error("Failed to create career email");
  }

  return response.data;
};
