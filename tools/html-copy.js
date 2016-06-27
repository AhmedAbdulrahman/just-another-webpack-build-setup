/* eslint-disable */

const ncp = require('ncp');
const path = require('path');

const source = path.join(process.cwd(), './app/html/');
const destination = path.join(process.cwd(), '/public/');

ncp(source, destination, (error) => {
  error
    ? console.error(error)
    : console.log('Done with html copy!');
});
