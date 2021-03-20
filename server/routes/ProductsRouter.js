const { Router } = require('express')
const ControllerProducts = require('../controller/ControllerProducts')

const router = Router()

router.get('/products', ControllerProducts.GetProductsRouter);
router.get('/products/:productid', ControllerProducts.GetProductIdRouter);
router.post('/products', ControllerProducts.PostProductsRouter);
router.put('/products/:productid', ControllerProducts.PutProductIdRouter);
router.delete('/products/:productid', ControllerProducts.DeleteProductIdRouter);

module.exports = router;