import { getCustomRepository } from 'typeorm';
import { CategoriesRepositories } from '../repositories/CategoriesRepositories';

export class GetAllCategoriesService {
  async execute() {
    const categoriesRepositories = getCustomRepository(CategoriesRepositories);

    const categories = await categoriesRepositories.find();

    return categories;
  }
}
