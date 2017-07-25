exports.up = knex => knex.schema.createTable('users', table => {
	table.increments();
	table.string('display').notNullable();
	table.string('email').unique().notNullable();
	table.string('password').notNullable();
	table.string('image').notNullable();
	table.string('url');
	table.text('bio');
});

exports.down = knex => knex.schema.dropTable('users');