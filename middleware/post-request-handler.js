const querystring = require('querystring');

export default function (context) {
  return new Promise((resolve) => {
    let body = '';
    context.req.on('data', (data) => {
      body += data;
      console.log('body', body);
    });

    context.req.on('end', () => {
      body = querystring.parse(body) || {};
      console.log('body', body.name);
      resolve({ body });
    });
  });
};
