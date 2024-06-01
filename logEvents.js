const {format} = require('date-fns');
const {v4:uuid} = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
  const time = format(new Date(), 'yyyy/MM/dd\thh:mm:ss');
  const info = `${time}, ${uuid()}, ${message}`;

  try {
    if(!fs.existsSync('./test')){
      await fsPromises.mkdir('./test')
    }

    await fsPromises.writeFile(path.join(__dirname, 'test', 'text.txt'), info);
    
  } catch (error) {
    console.log(error);
  }
 
}

module.exports = logEvents;

