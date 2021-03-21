const { Router } = require('express')
const ExampleRouter = require("./ExampleRouter")
// const UsersRouter = require("./UsersRouter")
// const ProductsRouter = require("./ProductsRouter")
// const OrdersRouter = require("./OrdersRouter")
const router = Router()

// aqui vão todas as rotas
router.use('/example', ExampleRouter);

// router.use(UsersRouter);
// router.use(ProductsRouter);
// router.use(OrdersRouter)

// router.use('/users', UsersRouter);
// router.use('/users/:uid', UsersRouter);
// router.use('/users', UsersRouter);
// router.use('/users/:uid', UsersRouter);
// router.use('/users/:uid', UsersRouter);

// router.use('/products', ProductsRouter);
// router.use('/products/:productid', ProductsRouter);
// router.use('/products', ProductsRouter);
// router.use('/products/:productid', ProductsRouter);
// router.use('/products/:productid', ProductsRouter);

// router.use('/orders', OrdersRouter);
// router.use('/orders/:orderId', OrdersRouter);
// router.use('/orders', OrdersRouter);
// router.use('/orders/:orderId', OrdersRouter);
// router.use('/orders/:orderId', OrdersRouter);

module.exports = router
