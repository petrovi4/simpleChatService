import Sequelize from 'sequelize';
import { db as config } from '../config';

import MessageInitializer from './models/message.js';


export let sequelize = new Sequelize(config);

export const Message = MessageInitializer(sequelize);


// Relations could be defined here.
// For example, if there was a table with conversations, the relation might look like this
// Message.belongsTo(Conversation, { foreignKey: 'conversation_id' });
