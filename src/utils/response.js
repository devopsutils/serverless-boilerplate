module.exports.json = (data = null, status = 200) => {
    return {
      statusCode: status,
      headers: {
        "Access-Control-Allow-Origin": "*" // else we could just add CORS
      },
      body: JSON.stringify(data)
    };
  };
module.exports.error = (message = 'Error', status = 500) => {
    return {
      statusCode: status,
      headers: {
        "Access-Control-Allow-Origin": "*" // else we could just add CORS
      },
      body: JSON.stringify(message)
    };
  };