import { getCustomRepository } from 'typeorm';
import { Videos } from '../entities/Video';
import { CategoriesRepositories } from '../repositories/CategoriesRepositories';
import { VideosRepositories } from '../repositories/VideosRepositories';

type VideoRequest = {
  id: string;
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

export class UpdateVideoService {
  async execute({
    id,
    name,
    description,
    duration,
    category_id,
  }: VideoRequest): Promise<Error | Videos> {
    const categoriesRepositories = getCustomRepository(CategoriesRepositories);
    const videosRepositories = getCustomRepository(VideosRepositories);

    const video = await videosRepositories.findOne(id);

    if (!video) {
      return new Error('Video does not exists!');
    }

    if (!(await categoriesRepositories.findOne(category_id))) {
      return new Error('Category does not exists!');
    }

    video.name = name ? name : video.name;
    video.description = description ? description : video.description;
    video.duration = duration ? duration : video.duration;
    video.category_id = category_id ? category_id : video.category_id;

    await videosRepositories.save(video);

    return video;
  }
}
