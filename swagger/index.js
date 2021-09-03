
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Books and student api',
      version: '1.0.0',
      description:
        'This is a REST API application made with Express. It retrieves data from lowdb.',
      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Jeff Ngugi',
        url: 'http://jeffngugi.github.io',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
      {
        url: 'http://localhost:4000',
        description: 'Production server',
      },
    ],
  };
  const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis:["./swagger/*.js"],
  };
  


module.exports =options