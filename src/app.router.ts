import { Router } from "express";
import { Request, Response } from "express";

const router : Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('index');
});

export { router };