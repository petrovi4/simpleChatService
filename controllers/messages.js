import { Message } from '../dto';
import { uuid } from 'uuidv4';

export async function post({ sender, conversation_id, message }) {

	// The initial adaptation parameters
	sender = ('string' === typeof sender) && sender.trim();
	conversation_id = parseInt(conversation_id);
	message = ('string' === typeof message) && message.trim();

	return new Promise(resolve => {
		console.log('Checking the parameters');

		if(!sender || !sender.length) throw new Error('Wrong sender');
		if(!conversation_id) throw new Error('Wrong conversation_id');
		if(!message || !message.length) throw new Error('Wrong sender');

		resolve();
	})

		.then(async () => {
			console.log('Creating a message and saving it in the database');
			return await Message.create({id: uuid(), sender, conversation_id, message});
		})

		.catch(err => {
			// Catch error, process, save and notify admin
			console.error(err);
			throw err;
		});
}
