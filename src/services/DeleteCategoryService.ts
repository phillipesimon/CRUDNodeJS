import { getCustomRepository } from 'typeorm';
import { CategoriesRepositories } from '../repositories/CategoriesRepositories';

export class DeleteCategoryService {
  async execute(id: string) {
    const categoriesRepositories = getCustomRepository(CategoriesRepositories);

    if (!(await categoriesRepositories.findOne(id))) {
      return new Error('Category does not exists!');
    }

    await categoriesRepositories.delete(id);
  }
}
