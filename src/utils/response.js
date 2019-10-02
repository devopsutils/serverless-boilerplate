module.exports.json = (data = null, status = 200) => ({
  statusCode: status,
  headers: {
    'Access-Control-Allow-Origin': '*' // CORB
  },
  body: JSON.stringify(data)
});

module.exports.error = (message = 'Error', status = 500) => ({
  statusCode: status,
  headers: {
    'Access-Control-Allow-Origin': '*' // CORB
  },
  body: JSON.stringify(message)
});
