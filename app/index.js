const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde CI/CD!');
})

// Falta el punto y coma y paréntesis
app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`)
// Falta el paréntesis de cierre y punto y coma