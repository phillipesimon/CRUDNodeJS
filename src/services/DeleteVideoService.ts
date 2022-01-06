import { getCustomRepository } from 'typeorm';
import { AppError } from '../Error/AppError';
import { VideosRepositories } from '../repositories/VideosRepositories';

export class DeleteVideoService {
  async execute(id: string) {
    const videosRepositories = getCustomRepository(VideosRepositories);

    if (!(await videosRepositories.findOne(id))) {
      throw new AppError('Video does not exists!', 400);
    }

    await videosRepositories.delete(id);
  }
}
