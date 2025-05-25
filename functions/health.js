exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'ok' }),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
};
