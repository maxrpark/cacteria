require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.KEY })
  .base('app6TVvkeyBfGhvf7')
  .table('products');

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const product = await airtable.retrieve(id);
      if (product.error) {
        return {
          headers:{
            'Access-Control-Allow-Origin': '*',
          },
          statusCode: 500,
          body: `No product with id ${id}`,
        };
      }
      return {
        headers:{
          'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Network problem',
      };
    }
  }
  return {
    statusCode: 200,
    body: 'single product',
  };
};

// try {
//   const { records } = await airtable.list();
//   const products = records.map((product) => {
//     const { id } = product;
//     const { name, image, price, desc, category, feature } = product.fields;
//     const url = image[0].url;
//     return { id, name, url, price, desc, category, feature };
//   });
//   return {
//     statusCode: 200,
//     body: JSON.stringify(products),
//   };
// } catch (error) {
//   return {
//     statusCode: 500,
//     body: 'Server Error',
//   };
// }
// };
