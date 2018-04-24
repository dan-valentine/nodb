const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const port = 3004;
const usersApi = "/api/planets/";

let app = express();
app.use(bodyParser.json());
app.use(cors());
const userCtrl = require('./controllers/userController');

app.use( express.static( `${__dirname}/../build` ) );

app.post(usersApi, userCtrl.create);
app.get(usersApi, userCtrl.read);
// app.put(usersApi+":id", userCtrl.update);
app.delete(usersApi+":planetName", userCtrl.delete);

app.listen(port, () => {
	console.log(`listening on port ${port}`)
});
