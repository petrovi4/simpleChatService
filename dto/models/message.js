import { Model, DataTypes } from 'sequelize';


export default sequelize => {
	class Message extends Model {}

	Message.init({
		sender: { type: DataTypes.STRING, allowNull: false, comment: 'Sender Id' },
		conversation_id: { type: DataTypes.INTEGER, allowNull: false, comment: 'Conversation Id' },
		message: { type: DataTypes.TEXT, allowNull: false, comment: 'Message text' },
	}, {
		sequelize,
		modelName: 'Message',
		tableName: 'message',
		comment: 'Message in conversation',
		timestamps: true,
		createdAt: 'created',
		updatedAt: false,
	});

	return Message;
};
