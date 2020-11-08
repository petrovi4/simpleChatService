import { join } from 'path';

export const port = 8080;

export const db = {
	dialect: 'sqlite',
	storage: join(__dirname, 'database.sqlite'),
};
