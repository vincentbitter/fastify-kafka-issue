async function consumer (fastify, options) {
    fastify.kafka.subscribe('updates')
    fastify.kafka.on('updates', async (msg) => {
      console.log("New message")
      console.log(msg.value.toString())
      fastify.kafka.consumer.consumer.commit(msg)
    })
    fastify.kafka.consume()
}

module.exports = consumer