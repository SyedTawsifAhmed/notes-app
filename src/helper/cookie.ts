import { Response } from "express";

export const setCookie = (res: Response, token: string): void => {
  try {
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    });
  } catch (error) {
    throw new Error("Failed to set cookie");
  }
};