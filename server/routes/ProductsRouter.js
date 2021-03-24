const { Router } = require('express')
const ProductsController = require('../controller/ControllerProducts')

const router = Router()

router.get('/', ProductsController.getProducts);
router.get('/:productid', ProductsController.getProductById);
router.post('/', ProductsController.createProduct);
router.put('/:productid', ProductsController.updateProduct);
router.delete('/:productid', ProductsController.deleteProduct);

module.exports = router;