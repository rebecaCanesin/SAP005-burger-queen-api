const express = require('express');
const routes = require('./server/routes/index.js');
const cors = require("cors");
const UsersRouter = require("./server/routes/UsersRouter")
const ProductsRouter = require("./server/routes/ProductsRouter")
const OrdersRouter = require("./server/routes/OrdersRouter")
const app = express();
const port = process.env.PORT || 3000;

app.use(routes);
app.use(express.json());
app.use(cors());
app.use(UsersRouter);
app.use(ProductsRouter);
app.use(OrdersRouter);
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
