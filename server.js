const httpServer = require('./src/app');
const cluster = require('cluster');
const os = require('os');
const logger = require('./src/utils/logger');
const sequelize = require('./src/config/sequelizeConfig');

async function server (){

		await sequelize.sync({alter: true}).then(() => {
			logger.info('All models were synchronized successfully.');
		}).catch((err) => {
			logger.info(err);
		});

		const PORT = process.env.PORT || 3000;

		const server = httpServer.listen(PORT, () => {
			logger.info(`App listening on port ${PORT}`);
		});

		server.on('error', err => logger.info(err));
	}

server();