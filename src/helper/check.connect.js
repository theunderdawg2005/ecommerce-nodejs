const mongoose = require("mongoose");
const os = require("node:os");
const SECONDS = 5000

const countConnect = () => {
    const numConnect = mongoose.connections.length
    console.log(`Number of connections::${numConnect}`)
}

const checkOverload = () => {
    setInterval(() => {
        const numConnect = mongoose.connections.length
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss
        const maxConnections = numCores * 5
        console.log(`Maximun connections: ${maxConnections}`)
        console.log(`Active connection:${numConnect}`)
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024}MB`)
        if (numConnect > maxConnections) {
            console.log(`Connections overload!`)
        }
    }, SECONDS)
}

module.exports = {
    countConnect,
    checkOverload
}