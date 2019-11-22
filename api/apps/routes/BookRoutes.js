import { Router } from 'express';
import BookController from '../controllers/BookController';

const router = Router();

router.get('/', BookController.getAllBooks);
router.post('/add', BookController.addBook);
router.get('/:id', BookController.getABook);
router.put('/:id', BookController.updatedBook);
router.delete('/:id', BookController.deleteBook);
router.route('/user')
.get()
.post()
router.route('user/:id')
.put()
.patch() //update
.delete()
export default router;