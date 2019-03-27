// eslint-disable-next-line
import { Request, Response } from "express";

export const getApi = (req: Request, res: Response) => {
  res.send("API Examples");
};
