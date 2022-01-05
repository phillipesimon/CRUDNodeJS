import { Request, Response } from 'express';
import { GetAllCategoriesService } from '../services/GetAllCategoriesService';

export class GetAllCategoriesCotroller {
  async handle(request: Request, response: Response) {
    const service = new GetAllCategoriesService();

    const categories = await service.execute();

    return response.json(categories);
  }
}
