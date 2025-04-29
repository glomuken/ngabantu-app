import React from "react";
import axios from "axios";

export const sendMessage = async (message: string) => {
  try {
    const response = await axios.post("https://localhost:5000/chat", {
      message: message
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message: ", error);
    return null;
  }
};