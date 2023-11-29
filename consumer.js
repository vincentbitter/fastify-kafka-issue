async function consumer (fastify, options) {
    fastify.kafka.subscribe('updates')

    function consume() {
        fastify.kafka.consume(10000, async (err, messages) => {
        if (!messages || messages.length === 0) {
            setTimeout(consume, 1000)
            return
        }

        console.log(messages.length.toString())
        fastify.kafka.consumer.consumer.commit()
        consume()
        })
    }
    consume()
}

module.exports = consumer