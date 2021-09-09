const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const cors = require('cors');
require('dotenv/config');

const app = express();
const port = process.env.PORT || 8080;

const db_pass = process.env.DB_PASS
const db_name = process.env.DB_NAME
const db_user = process.env.DB_USER

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@${db_name}.nlxji.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen(port, () => {
    console.log('====================================');    
    console.log(`Server rodando na porta ${port}`);
    console.log('Pressione ctrl+C para desligar o servidor');
    console.log('====================================');
});