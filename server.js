const crypto = require('node:crypto')
const fastify = require('fastify')()
const group = crypto.randomBytes(20).toString('hex')

fastify
  .register(require('@fastify/kafka'), {
    producer: {
      'metadata.broker.list': '127.0.0.1:9092',
      'group.id': group,
      'fetch.wait.max.ms': 10,
      'fetch.error.backoff.ms': 50,
      'dr_cb': true
    },
    consumer: {
      'metadata.broker.list': '127.0.0.1:9092',
      'group.id': group,
      'fetch.wait.max.ms': 10,
      'fetch.error.backoff.ms': 50,
      'auto.offset.reset': 'earliest'
    }
  })

fastify.post('/data', (req, reply) => {
  fastify.kafka.push({
    topic: 'updates',
    payload: req.body,
    key: 'dataKey'
  })
  return "ok"
})

fastify.register(require("./consumer"))

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})