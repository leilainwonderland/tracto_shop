import { Router, Request, Response } from 'express';

const router : Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('index');
});

router.get('/article_list', (req: Request, res: Response) => {
  res.render('article_list');
});

router.get('/article_sale', (req: Request, res: Response) => {
  res.render('article_sale');
});

export { router };
