import express from 'express';
const app = express();
const PORT = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// atividade calculadora
app.post('/api/calculadora', (req, res) => {
  const { num1, num2, operacao } = req.body;
  let result;

  switch (operacao) {
    case 'soma':
      result = num1 + num2;
      break;
    case 'subtracao':
      result = num1 - num2;
      break;
    case 'multiplicacao':
      result = num1 * num2;
      break;
    case 'divisao':
      result = num2 !== 0 ? num1 / num2 : null;
      break;
    default:
      return res.status(400).json({ error: 'Operação inválida' });
  }
  if (result === null) {
    return res.status(400).json({ error: 'Divisão por zero não é permitida' });
  }
  res.json({ result });
});

//exercício media de notas
app.get('/api/media', (req, res) => {
  const { nota1, nota2, nota3 } = req.query;
  const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
  res.json({ media });
});

//exercicio calculo de IMC
app.post('/api/imc', (req, res) => {
  const { peso, altura } = req.body;
  const imc = peso / (altura * altura);
  res.json({ imc });
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

