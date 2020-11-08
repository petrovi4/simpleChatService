import { Router } from 'express';
import { getMany } from '../controllers/conversations';
import { auth, errorRes, successRes } from './helpers';

const conversationsRouter = Router();


conversationsRouter.get('/:conversation_id', auth, ({ params: { conversation_id } = {}, query: {limit, offset} = {} }, res) => {
	// Naive error handling (there is no information about the business meaning of fields in routes)
	if(!conversation_id) return errorRes(res, new Error('Wrong params'));

	getMany({ conversation_id, limit, offset })
		.then(messages => successRes(res, {id: conversation_id, messages: messages.map(({sender, message, created}) => ({sender, message, created}))}))
		.catch(err => errorRes(res, err));
});


export default conversationsRouter;
