const { Router } = require('express')
const ControllerUsers = require('../controller/ControllerUsers')

const router = Router()

router.get('/users', ControllerUsers.GetUsersRouter);
router.get('/users/:uid', ControllerUsers.GetUserIdRouter);
router.post('/users', ControllerUsers.PostUsersRouter);
router.put('/users/:uid', ControllerUsers.PutUserIdRouter);
router.delete('/users/:uid', ControllerUsers.DeleteUserIdRouter);

module.exports = router