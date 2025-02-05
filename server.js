const express = require('express'); // Importa o Express (similar ao using do C#)
const app = express(); // Cria uma instância do Express (similar ao new do C#)
const port = 3000; // Define a porta (similar à configuração do IIS ou Kestrel)

// Rota GET (similar a um método GET em um Controller ASP.NET Core)
app.get('/', (req, res) => {
  res.send('Olá, Mundo!'); // Envia uma resposta (similar ao Ok() do ASP.NET Core)
});

// Rota POST (similar a um método POST em um Controller ASP.NET Core)
app.post('/api/produtos', (req, res) => {
    res.send('Produto Adicionado')
})

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});