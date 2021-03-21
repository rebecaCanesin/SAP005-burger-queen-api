const { Router } = require('express')
const ControllerProducts = require('../controller/ControllerProducts')

const router = Router()

router.get('/products', ControllerProducts.all);
// router.get('/products/:productid', ControllerProducts.GetProductIdRouter);
router.post('/products', ControllerProducts.create);
// router.put('/products/:productid', ControllerProducts.PutProductIdRouter);
// router.delete('/products/:productid', ControllerProducts.DeleteProductIdRouter);

module.exports = router;