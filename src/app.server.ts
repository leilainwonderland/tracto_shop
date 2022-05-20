import { Application } from "express";
import express from "express";
import { resolve } from "path";
import { create } from 'express-handlebars';
import { router } from "./app.router";

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

// sever
app.listen(port, () => {
  console.log(`Server runing on port : ${port}`);
});
