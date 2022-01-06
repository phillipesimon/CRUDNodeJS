import { getCustomRepository } from 'typeorm';
import { VideosRepositories } from '../repositories/VideosRepositories';

export class DeleteVideoService {
  async execute(id: string) {
    const videosRepositories = getCustomRepository(VideosRepositories);

    if (!(await videosRepositories.findOne(id))) {
      return new Error('Video does not exists!');
    }

    await videosRepositories.delete(id);
  }
}
