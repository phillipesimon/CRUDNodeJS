import { getCustomRepository } from 'typeorm';
import { Category } from '../entities/Category';
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
      return new Error('Category already exists');
    }

    const category = categoriesRepositories.create({
      name,
      description,
    });

    await categoriesRepositories.save(category);

    return category;
  }
}
