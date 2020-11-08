import { Router } from 'express';
import { post } from '../controllers/messages';
import { auth, errorRes, successRes } from './helpers';

const messagesRouter = Router();


messagesRouter.post('/', auth, ({ body: { sender, conversation_id, message } = {} }, res) => {
	// Naive error handling (there is no information about the business meaning of fields in routes)
	if(!sender || !conversation_id || !message) return errorRes(res, new Error('Wrong params'));

	post({ sender, conversation_id, message })
		.then(message => successRes(res, message))
		.catch(err => errorRes(res, err));
});


export default messagesRouter;
