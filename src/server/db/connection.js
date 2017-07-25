import configs from '../../knexfile.js';
import knex from 'knex';

const environment = process.env.NODE_ENV;

export default knex(configs[environment]);