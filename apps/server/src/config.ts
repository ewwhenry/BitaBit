import path from "path";
import dotenv from "dotenv";
import * as mssql from "mssql";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const PORT = process.env.PORT || 3001;
export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
export const SESSION_SECRET = process.env.SESSION_SECRET || "default_secret";
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
export const JWT_SECRET = process.env.JWT_SECRET!;

export const DB_CONFIG: mssql.config = {
  user: process.env.DB_USER || "sa",
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER || "localhost",
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};
