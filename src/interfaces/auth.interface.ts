import express from "express";

// Declare the userId property in the global namespace of the Express module.
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}
