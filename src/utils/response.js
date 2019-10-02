module.exports.json = (data = null, status = 200) => ({
  statusCode: status,
  body: JSON.stringify(data)
});

module.exports.error = (message = 'Error', status = 500) => ({
  statusCode: status,
  body: JSON.stringify(message)
});
