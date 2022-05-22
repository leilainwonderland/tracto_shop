import { NextFunction, Request, Response } from "express";

class ArticleDataHandler {

  static async getData (req: Request,  res:Response, next: NextFunction ){
    const body = req.body;

    console.log(body);
    res.render('article_form');
  };
};

export { ArticleDataHandler }
