const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = 3002;

// Sample initial transactions
let transactions = [
    { type: 'income', description: 'Salary', amount: 3000 },
    { type: 'expense', description: 'Groceries', amount: 200 },
];

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index', { transactions });
});

app.post('/addTransaction', (req, res) => {
    const { type, description, amount } = req.body;
    const transaction = { type, description, amount: parseFloat(amount) };
    transactions.push(transaction);
    res.redirect('/');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
