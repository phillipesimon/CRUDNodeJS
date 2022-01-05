import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { GetAllCategoriesCotroller } from './controllers/GetAllCategoriesCotroller';

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoriesCotroller().handle);

export { routes };
