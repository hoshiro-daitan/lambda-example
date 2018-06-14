const config = require('config');
const Redis = require('ioredis');

exports.handler = async () => {
  const redis = new Redis(config.get('redis.port'), config.get('redis.url'));
  await redis.flushdb();
  redis.disconnect();
  return '200';
};

