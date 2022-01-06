import { EntityRepository, Repository } from 'typeorm';
import { Videos } from '../entities/Video';

@EntityRepository(Videos)
export class VideosRepositories extends Repository<Videos> {}
