import Express from 'express';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';

import { port } from './config';

import routes from './routes';

const app = Express();

app.use(bodyParser.json({ limit: '10kb', type: 'json' }));

app.use(routes);
app.use(errorhandler());

app.listen(port, () => console.log('Simple server started', {port}));
