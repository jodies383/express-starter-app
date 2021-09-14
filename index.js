const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const pizzaPerfect = require('./pizzaPerfect');
const pizza = pizzaPerfect()


app.get('/', function (req, res) {
	res.render('index', {
		counter: pizza.returnCost(),
		small: pizza.returnSmall(),
		medium: pizza.returnMedium(),
		large: pizza.returnLarge()
	});
});

app.post('/count', function (req, res) {
	pizza.addBtns(req.body.pizza)
	pizza.add(req.body.actionType)
	res.redirect('/')
});

app.get('/orders', function (req, res) {
	pizza.hide(req.body.payBtns)
	let list = pizza.returnOrder();
	console.log(list);
	res.render('orders', {
		order: list
	})
})





// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function () {
	console.log(`App started on port ${PORT}`)
});