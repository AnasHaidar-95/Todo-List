import { Router } from 'express';
import { TodoController } from '../controllers/todo.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import { createTodoSchema, updateTodoSchema } from '../schemas/todo.schema.js';

const router = Router();

router.post('/', validate(createTodoSchema), TodoController.create);
router.get('/', TodoController.getAll);
router.get('/:id', TodoController.getById);
router.patch('/:id', validate(updateTodoSchema), TodoController.update);
router.delete('/:id', TodoController.remove);

export default router;