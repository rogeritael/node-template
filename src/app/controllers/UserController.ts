import { Request, Response } from 'express';

import UserRepository from '../repositories/UserRepository';

class UserController {
  async index(req: Request, res: Response){
    //listar todos os registros
    const users = await UserRepository.findAll();
    res.status(200).json(users);
  }

  async show(req: Request, res: Response){
    //obter UM registro
    const { id } = req.params;
    const user = await UserRepository.findById(id);

    res.status(200).json(user);
  }

  async store(){
    //criar novo registro
  }

  async update(){
    //editar um registro[]
  }

  async delete(req: Request, res: Response){
    //Deletar um registro
    const { id } = req.params;
    await UserRepository.delete(id);

    res.sendStatus(204);
  }
}

export default new UserController();
