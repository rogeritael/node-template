import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

const routes = Router();

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);

export default routes;
