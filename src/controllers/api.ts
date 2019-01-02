"use strict";

import { Request, Response } from "express";

export const getApi = (req: Request, res: Response) => {
  res.send("API Examples");
};
