import { getCustomRepository } from 'typeorm';
import { AppError } from '../Error/AppError';
import { CategoriesRepositories } from '../repositories/CategoriesRepositories';

type CategoryUpdateRequest = {
  id: string;
  name: string;
  description: string;
};

export class UpdateCategoryService {
  async execute({ id, name, description }: CategoryUpdateRequest) {
    const categoriesRepositories = getCustomRepository(CategoriesRepositories);

    const category = await categoriesRepositories.findOne(id);

    if (!category) {
      throw new AppError('Category does not exists!', 400);
    }

    category.name = name ? name : category.name;
    category.description = description ? description : category.description;

    await categoriesRepositories.save(category);

    return category;
  }
}
