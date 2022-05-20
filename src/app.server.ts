import express, { Application } from 'express';
import { resolve } from 'path';
import { create } from 'express-handlebars';
import { router } from './app.router';
import { run } from './db/connectDb';

const port = 3000;
const app : Application = express();

// HBS
app.set('views', resolve(process.cwd(), 'src', 'views'));
const hbsConfig = { extname: '.hbs' };
const hbs = create(hbsConfig);
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// router
app.use(router);

// db
run();

// sever
app.listen(port, () => {
  console.log(`Server runing on port : ${port}`);
});
