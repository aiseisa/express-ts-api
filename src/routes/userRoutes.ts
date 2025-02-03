import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController';

const router = express.Router();

router.get('/', getUsers);
router.post('/create', createUser);
router.get('/:id', (req, res, next) => {
  getUserById(req, res).catch(next);
});
router.get('/update/:id', (req, res, next) => {
  updateUser(req, res).catch(next);
});
router.get('/delete/:id', (req, res, next) => {
  deleteUser(req, res).catch(next);
});

export default router;
