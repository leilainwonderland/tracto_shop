import { Router, Request, Response } from 'express';
import { ArticleDataHandler } from './handlers/ArticleDataHandler';
import { ErrorHandler } from './handlers/ErrorHandler';

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

router.get('*', ErrorHandler.execute);

router.post('/article_data', ArticleDataHandler.getData);

export { router };
