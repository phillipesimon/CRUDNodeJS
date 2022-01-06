import { getCustomRepository } from 'typeorm';
import { VideosRepositories } from '../repositories/VideosRepositories';

export class GetAllVideosService {
  async execute() {
    const videosRepositories = getCustomRepository(VideosRepositories);

    const videos = await videosRepositories.find({
      relations: ['category'],
    });

    return videos;
  }
}
