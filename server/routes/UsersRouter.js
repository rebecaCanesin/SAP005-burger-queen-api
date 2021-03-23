const { Router } = require('express')
const UserController = require('../controller/ControllerUsers')

const router = Router()

router.get('/users', UserController);
// router.get('/users/:uid', ControllerUsers.GetUserIdRouter);
router.post('/users', UserController);
// router.put('/users/:uid', ControllerUsers.PutUserIdRouter);
// router.delete('/users/:uid', ControllerUsers.DeleteUserIdRouter);

module.exports = router