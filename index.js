const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by Bernardo RM');
});


app.get('/hours', (req, res, next) => {
  res.sendfile("assets/1a_dev_hours.json");
});

app.get('/size', (req, res, next) => {
	res.sendfile("assets/1a_proxy_size.json");
});

app.get('/3a_test1', (req, res, next) => {
	res.sendfile("assets/3a_test1.json");
});

//Issue #6
app.get('/3a_test2', (req, res, next) => {
	res.sendfile("assets/3a_test2.json");
});

//Issue #7
app.get('/3a_test3', (req, res, next) => {
	res.sendfile("assets/3a_testt3.json");
});

//Issue #8
app.get('/3a_test4', (req, res, next) => {
	res.sendfile("assets/3a_test4.json");
});

app.listen(port,  () => 
	console.log('listening on port ' + port
));
