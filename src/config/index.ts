import { config } from "dotenv";

config();

export const Config = {
  PORT: process.env.PORT || 3000,
};
