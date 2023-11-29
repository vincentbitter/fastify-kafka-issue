## Steps to reproduce
1. Create a new project in an empty folder: `npm init`
1. Install Fastify: `npm i fastify`
1. Install Fastify-Kafka: `npm i @fastify/kafka`
1. Create `server.js` with the content as shown on https://github.com/fastify/fastify-kafka/blob/master/README.md
1. Start the application: `npm start`

## Output
```
> start
> node server.js

/x/server.js:31
fastify.kafka.subscribe('updates')
              ^

TypeError: Cannot read properties of undefined (reading 'subscribe')
    at Object.<anonymous> (/x/server.js:31:15)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49
```