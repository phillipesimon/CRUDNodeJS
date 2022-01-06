import { getCustomRepository } from 'typeorm';
import { Videos } from '../entities/Video';
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
      return new Error('Category does not exists!');
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
