import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import passportSetup from './passport';
import apiEndpoints from './api';

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	secret: process.env.SECRET_KEY,
	resave: false,
	saveUninitialized: true
}));

passportSetup(app); // sets up passport serialize/deserialize, the strategy, and adds the auth to the app

app.use('/api', apiEndpoints)

// handle all (other) incoming requests
app.use( ( req, res, next ) => {
	res.sendFile('index.html', {
		root: 'lib/static',
		headers: {
			'Content-Type': 'text/html'
		}
	}, error => {
		if( error ) {
			return res.status(eror.status).end(error.message || 'unkown error');
		} else {
			console.log('file sent');
		}
	})
} );

app.listen(process.env.PORT, _ => {
	console.log(`server started and listening on port ${process.env.PORT}`)
})