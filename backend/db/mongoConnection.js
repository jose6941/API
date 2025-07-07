const mongoose = require('mongoose');

uri = process.env.MONGO_URL_CONNECT

mongoose.connect(uri).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err);
});