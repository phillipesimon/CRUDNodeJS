import { getCustomRepository } from 'typeorm';
import { Videos } from '../entities/Video';
import { AppError } from '../Error/AppError';
import { CategoriesRepositories } from '../repositories/CategoriesRepositories';
import { VideosRepositories } from '../repositories/VideosRepositories';

type VideoRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
};
export class CreateVideoService {
  async execute({
    name,
    description,
    duration,
    category_id,
  }: VideoRequest): Promise<Error | Videos> {
    const categoriesRepositories = getCustomRepository(CategoriesRepositories);
    const videosRepositories = getCustomRepository(VideosRepositories);

    if (!(await categoriesRepositories.findOne(category_id))) {
      throw new AppError('Category does not exists', 400);
    }

    if (await videosRepositories.findOne({ name })) {
      throw new AppError('Video already exists', 400);
    }

    const video = videosRepositories.create({
      name,
      description,
      duration,
      category_id,
    });

    await videosRepositories.save(video);

    return video;
  }
}
