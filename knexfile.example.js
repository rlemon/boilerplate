const path = require('path');
module.exports = {
	development: {
		client: 'postgresql',
		connection: {
			host: 'localhost',
			user: '',
			password: '',
			database: ''
		},
		migrations: {
			directory: path.join(__dirname, 'src', 'server', 'db', 'migrations')
		},
		seeds: {
			directory: path.join(__dirname, 'src', 'server', 'db', 'seeds')
		}
	}
}