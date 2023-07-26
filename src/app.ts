import express, { Application } from 'express';
import cors from 'cors';

import UserRouter from './app/routes/UserRoutes';
import CategoriesRouter from './app/routes/CategoryRoutes';

class App {
  public server: Application;

  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
    this.server.use(cors());

  }

  routes(){
    this.server.use(UserRouter);
    this.server.use(CategoriesRouter);
  }
}

export default new App().server;
