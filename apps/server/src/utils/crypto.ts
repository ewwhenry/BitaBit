import jwt, { SignOptions } from "jsonwebtoken";

export const generateToken = (
  payload: object,
  secret: string,
  expiresIn: number | any
): string => {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, secret, options);
};
export const verifyToken = (token: string, secret: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};
