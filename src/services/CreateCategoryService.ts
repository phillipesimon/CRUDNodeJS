import { getCustomRepository } from 'typeorm';
import { Category } from '../entities/Category';
import { AppError } from '../Error/AppError';
import { CategoriesRepositories } from '../repositories/CategoriesRepositories';

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    const categoriesRepositories = getCustomRepository(CategoriesRepositories);

    if (await categoriesRepositories.findOne({ name })) {
      throw new AppError('Category already exists', 400);
    }

    const category = categoriesRepositories.create({
      name,
      description,
    });

    await categoriesRepositories.save(category);

    return category;
  }
}
