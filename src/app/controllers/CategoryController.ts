import { Request, Response } from 'express';
import CategoryRepository from '../repositories/CategoryRepository';

class CategoryController {
  async index(req: Request, res: Response){
    const categories = await CategoryRepository.findAll();

    res.status(200).json(categories);
  }

  async store(req: Request, res: Response){
    const { name } = req.body;

    const category = await CategoryRepository.create(name);

    res.status(200).json(category);
  }
}

export default new CategoryController();
