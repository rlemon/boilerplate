import passport from 'passport';
import { Strategy } from 'passport-local';
import { comparePasswords } from './helpers';
import knex from '../db/connection';

export default app => {

	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser(({id}, done) => done(null, id));
	passport.deserializeUser(async (id, done) => {
		try {
			const user = await knex('users').where({id}).first();
			done(null, user);
		} catch(error) {
			done(error, null);
		}
	});

	const strategyOptions = {
		usernameField: 'email',
		passwordField: 'password'
	};

	passport.use(new Strategy(strategyOptions, async (email, password, done) => {
		try {
			const user = await knex('users').where({email}).first();
			if( !user ) return done(null, false); // check if this is needed. I think the catch will handle this.
			if( !comparePasswords(password, user.password) ) return done(null, false); // password mismatch
			delete user.password; // optional?
			done(null, user);
		} catch(error) {
			done(error, next);
		}
	}));
};
