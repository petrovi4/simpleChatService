import { Message } from '../dto';

export async function getMany({ conversation_id, limit = 10, offset = 0 }) {

	// The initial adaptation parameters
	conversation_id = parseInt(conversation_id);
	limit = parseInt(limit);
	offset = parseInt(offset);

	return new Promise(resolve => {
		console.log('Checking the parameters');

		if(!conversation_id) throw new Error('Wrong conversation_id');
		if(!limit) throw new Error('Wrong limit');
		if(!offset && offset != 0) throw new Error('Wrong offset');

		resolve();
	})

		.then(async () => {
			console.log('Getting messages from the database');
			const messages = Message.findAll({
				where: {conversation_id},
				order: [['created', 'DESC']],
				limit, offset,
			});
			return messages;
		})

		.catch(err => {
			// Catch error, process, save and notify admin
			console.error(err);
			throw err;
		});
}
