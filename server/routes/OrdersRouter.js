const { Router } = require('express')
const ControllerOrders = require('../controller/ControllerOrders')

const router = Router()

router.get('/orders', ControllerOrders.all);
// router.get('/orders/:orderId', ControllerOrders.GetOrderIdRouter);
router.post('/orders', ControllerOrders.create);
// router.put('/orders/:orderId', ControllerOrders.PutOrderIdRouter);
// router.delete('/orders/:orderId', ControllerOrders.DeleteOrderIdRouter);

module.exports = router