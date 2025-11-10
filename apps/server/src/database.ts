import * as mssql from "mssql";
import { User } from "@repo/types/DBEntities";
import { DB_CONFIG } from "./config";

let pool: mssql.ConnectionPool;

export const getDbPool = async (): Promise<mssql.ConnectionPool> => {
  if (pool) {
    return pool;
  }
  pool = await mssql.connect(DB_CONFIG);
  return pool;
};

export const getUsers = async (): Promise<User[]> => {
  const pool = await getDbPool();
  const result = await pool.request().query<User>("SELECT * FROM wv_Users;");
  return result.recordset;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const pool = await getDbPool();
  const result = await pool
    .request()
    .input("email", mssql.NVarChar(100), email)
    .query<User>("SELECT * FROM wv_Users WHERE email = @email;");

  return result.recordset[0] || null;
};

export const createUser = async ({
  username,
  profile_picture_url,
  first_name,
  last_name,
  email,
  roles = "user",
  login_method,
  password_hash,
}: {
  username: string;
  profile_picture_url?: string;
  first_name: string;
  last_name: string;
  email: string;
  roles: string;
  login_method: string;
  password_hash?: string;
}) => {
  const pool = await getDbPool();

  const result = await pool
    .request()
    .input("username", mssql.NVarChar(50), username)
    .input(
      "profile_picture_url",
      mssql.NVarChar(255),
      profile_picture_url || null
    )
    .input("email", mssql.NVarChar(100), email)
    .input("first_name", mssql.NVarChar(100), first_name)
    .input("last_name", mssql.NVarChar(100), last_name)
    .input("roles", mssql.NVarChar(mssql.MAX), roles)
    .input("login_method", mssql.NVarChar(50), login_method)
    .input("password_hash", mssql.NVarChar(255), password_hash || null).query(`
      INSERT INTO Users (
        username, profile_picture_url, first_name, last_name,
        email, roles, login_method, password_hash
      )
      OUTPUT INSERTED.*
      VALUES (
        @username, @profile_picture_url, @first_name, @last_name,
        @email, @roles, @login_method, @password_hash
      )
    `);

  return result.recordset[0];
};
