import type { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  static async execute (req:Request, res:Response, next: NextFunction) {
    console.log('ErrorHandler execute called');
    res.render('error404');
  }
}

export { ErrorHandler };
