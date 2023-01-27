const express = require('express');
const rotas = require('./routers');

const app = express();

app.use(express.json());
app.use('/login', rotas.loginRouter);
app.use('/user', rotas.userRouter);
app.use('/categories', rotas.categoryRouter);
app.use('/post', rotas.postRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
