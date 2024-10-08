const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addData,
  removedata,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/datas
router.route('/:userId/datas').post(addData);

// /api/users/:userId/datas/:dataId
router.route('/:userId/datas/:dataId').delete(removedata);

module.exports = router;
