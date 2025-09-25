const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde CI/CD!');
});

// función mal escrita
app.liste(port, () => {  // ← "liste" en lugar de "listen"
  console.log(`App escuchando en http://localhost:${port}`);
});