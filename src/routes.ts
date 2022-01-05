import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { GetAllCategoriesCotroller } from './controllers/GetAllCategoriesCotroller';

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoriesCotroller().handle);
routes.delete('/categories/:id', new DeleteCategoryController().handle);

export { routes };
