const express = require('express');
const rotas = require('./routers');
require('express-async-errors');
const errorMiddleware = require('./middlewares/erro');

const app = express();

app.use(express.json());
app.use('/login', rotas.loginRouter);
app.use('/user', rotas.userRouter);

app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
