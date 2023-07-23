import { Request, Response } from 'express';

interface RequestResponseInterface {
  req: Request,
  res: Response
}

class UserController {
  async index({ res }: RequestResponseInterface){
    return res.status(200).json({ message: 'olá mundo' });
  }
}

export default new UserController();