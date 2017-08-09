const logger = require('../lib/logger')

logger.info('Starting GuateVoz server...')
require('../../server/main').listen(3000, () => {
  logger.success('GuateVoz is running at http://localhost:3000')
})
