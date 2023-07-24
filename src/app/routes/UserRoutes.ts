import { Router } from 'express';
import UserController from '../controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.delete);
routes.post('/users/', UserController.store);
routes.put('/users/:id', UserController.update);

export default routes;
