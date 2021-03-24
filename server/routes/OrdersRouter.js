const { Router } = require('express')
const OrdersController = require('../controller/ControllerOrders')

const router = Router()

router.get('/', OrdersController.getOrders);
router.get('/:orderId', OrdersController.getOrderById);
router.post('/', OrdersController.createOrder);
router.put('/:orderId', OrdersController.updateOrder);
router.delete('/:orderId', OrdersController.deleteOrder);

module.exports = router