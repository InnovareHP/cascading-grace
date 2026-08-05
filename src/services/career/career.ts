import axios from "axios";

export type CareerResume = {
  filename: string;
  content: string;
};

export type CareerPayload = {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  resume?: CareerResume;
};

export const CreateCareerEmail = async (payload: CareerPayload) => {
  const response = await axios.post("/api/career", payload);

  if (response.status !== 200) {
    throw new Error("Failed to create career email");
  }

  return response.data;
};
