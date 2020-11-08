import { Router } from 'express';

const router = Router();

import messagesRouter from './messages';
import conversationsRouter from './conversations';

router.use('/messages/', messagesRouter);
router.use('/conversations/', conversationsRouter);

export default router;

