const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

// set view engine
app.set('view engine', 'hbs');

// set view dir
app.set('views', 'views');

// load partials
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.send('Welcome to Home Page');
});

app.get('/help', (req, res) => {
	res.send('Welcome to Help Page');
});

app.get('/help/*', (req, res) => {
	res.send({
		error: 'Help Article not found'
	});
});

app.get('/weather', (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: 'You must provide an address!'
		});
	}
	console.log(req.query);
	res.send({
		weather: []
	});
});

app.get('*', (req, res) => {
	res.send({
		error: 'Page not found'
	});
});

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
