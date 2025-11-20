import axios from "axios";

export const CreateContactEmail = async (
  name: string,
  email: string,
  phone: number,
  message: string
) => {
  const response = await axios.post("/api/contact", {
    name,
    email,
    phone,
    message,
  });

  if (response.status !== 200) {
    throw new Error("Failed to create contact email");
  }

  return response.data;
};
