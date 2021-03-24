const { Router } = require('express')
const UserController = require('../controller/ControllerUsers')

const router = Router()

router.get('/', UserController.getAllUsers);
router.get('/:uid', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:uid', UserController.updateUser);
router.delete('/:uid', UserController.deleteUser);

module.exports = router