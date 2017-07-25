import bcrypt from 'bcryptjs';
import knex from '../db/connection';

export async function comparePasswords(a,b) {
	return await bcrypt.compare(a,b);
}

export async function createUser(details) {
	console.log('creating user', details);
	const salt = await bcrypt.genSalt();
	const hash = await bcrypt.hash(details.password, salt);
	return knex('users')
			.insert(Object.assign(details, { password: hash }))
			.returning('*');
}