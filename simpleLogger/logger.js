const fs = require('fs')

const logMessage = (message) => {
  const timeStamp = new Date().toISOString()
  const log = `${timeStamp} - ${message}\n`
  
  fs.appendFile('log.txt', log, (error) => {
    if (error) {
      console.error('Error writing to log file', error);
    }
  })
}

module.exports = logMessage