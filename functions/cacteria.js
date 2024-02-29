require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.KEY })
  .base('app6TVvkeyBfGhvf7')
  .table('products')

exports.handler = async (event, context, cb) => {
  try {
    const { records } = await airtable.list()
    const products = records.map((product) => {
      const { id } = product
      const { name, image, price, desc, category, feature, photo } = product.fields
      const url = image[0].url
      return { id, name, url, price,desc, category, feature,photo }
    })
    return {
      headers:{
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server Error',
    }
  }
}