import { getCustomRepository } from 'typeorm';
import { AppError } from '../Error/AppError';
import { CategoriesRepositories } from '../repositories/CategoriesRepositories';

export class DeleteCategoryService {
  async execute(id: string) {
    const categoriesRepositories = getCustomRepository(CategoriesRepositories);

    if (!(await categoriesRepositories.findOne(id))) {
      throw new AppError('Category does not exists!', 400);
    }

    await categoriesRepositories.delete(id);
  }
}
