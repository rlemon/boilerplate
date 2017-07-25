import { Router } from 'express';
import passport from 'passport';
import { createUser } from '../passport/helpers';

const router = Router();

function restrictAccess(req, res, next) {
	if( !( 'user' in req ) ) {
		return res.json({error:'not authorized'});
	}
	next();
}

router.post('/register', async (req, res, next) => {
	try {
		const response = await createUser(req.body);
		passport.authenticate('local', (err, user, info) => {
			if( user ) return res.json({authenticated: true});
		})(req, res, next);
	} catch (error) {
		res.json({error});
	}
});

router.post('/login', (req, res, next) => {
	passport.authenticate('local', (error, user, info) => {
		if( error ) return res.json({error});
		if( !user ) return res.json({error: 'user not found'});
		req.logIn(user, error => {
			if( error ) {
				return res.json({error});
			}
			res.json({user});
		});
	})(req, res, next);
});

router.post('/logout', (req, res) => {
	req.logout();
	res.json({authenticated: false})
});

export default router;